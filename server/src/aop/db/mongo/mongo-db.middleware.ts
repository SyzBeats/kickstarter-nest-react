import {
	ForbiddenException,
	Inject,
	Injectable,
	InternalServerErrorException,
	NestMiddleware,
} from '@nestjs/common';
import { ClientSession, Db, MongoClient } from 'mongodb';
import { FastifyRequest, FastifyReply } from 'fastify';
import keys from 'src/aop/keys';

export interface DbConnection {
	db: Db;
	session: ClientSession;
	withTransaction: <T>(operations: () => Promise<T>) => Promise<T>;
}

class DbContext implements DbConnection {
	#client: MongoClient;
	db: Db;
	session: ClientSession;

	constructor(client: MongoClient, db: Db) {
		this.#client = client;
		this.db = db;
	}

	async withTransaction<T>(operations: () => Promise<T>): Promise<T> {
		let result: T;
		let publicError: unknown;

		try {
			this.session = this.#client.startSession();
			this.startTransaction();

			result = await operations();

			await this.commitTransaction();

			return result;
		} catch (error: unknown) {
			publicError = error;
		} finally {
			await this.release();
		}

		if (publicError) {
			throw publicError;
		}

		throw new InternalServerErrorException(
			'Unexpected error in transaction',
		);
	}

	private startTransaction(): void {
		if (!this.session) {
			throw new InternalServerErrorException(
				'Session has not been initialized.',
			);
		}

		this.session.startTransaction();
	}

	private async commitTransaction(): Promise<void> {
		try {
			if (!this.session) {
				throw new Error('No transaction is active.');
			}

			await this.session.commitTransaction();
		} catch (error) {
			throw new Error('Transaction commit failed.');
		}
	}

	private async release(): Promise<void> {
		if (this.session) {
			await this.session.endSession();
			this.session = undefined;
		}
	}
}

@Injectable()
export class MongoDbMiddleware implements NestMiddleware {
	constructor(
		@Inject('MONGO_DB_CLIENT')
		private client: MongoClient,
	) {}

	use(req: FastifyRequest, _: FastifyReply, next: () => void) {
		if (!this.client) {
			throw new ForbiddenException();
		}

		req.appContext.client = this.client;
		req.appContext.connection = new DbContext(
			this.client,
			this.client.db(keys.dbName),
		);

		next();
	}
}
