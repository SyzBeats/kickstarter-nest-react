import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Db } from 'mongodb';
import { FastifyRequest, FastifyReply } from 'fastify';

@Injectable()
export class MongoDbMiddleware implements NestMiddleware {
	constructor(@Inject('MONGO_DB_CLIENT') private db: Db) {}

	use(req: FastifyRequest, _: FastifyReply, next: () => void) {
		req.appContext.db = this.db;
		next();
	}
}
