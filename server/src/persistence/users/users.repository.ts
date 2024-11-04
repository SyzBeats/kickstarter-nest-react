import { Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/domain/users/interfaces/user.repository.interface';
import { AppContext } from 'src/aop/http/context';
import { ObjectId } from 'mongodb';
import { User } from 'src/domain/users/entities/user';

import { UsersMongoDocument } from './users.entity';

@Injectable()
export class UsersRepository implements IUserRepository {
	async insert(input: User, context: AppContext): Promise<User> {
		try {
			const document = UsersMongoDocument.serialize(input);

			const userDocument = await context.connection.db.collection('users').insertOne({
				...document,
			});

			return UsersMongoDocument.appendId(document, userDocument.insertedId);

		} catch (error) {
			return null;
		}
	}

	async getAll(context: AppContext): Promise<User[]> {
		try {
			const documents = await context.connection.db.collection('users').find<UsersMongoDocument>({}).toArray();

			return documents.map(UsersMongoDocument.deserialize);

		} catch(error) {
			return [];
		}
	}

	async getById(id: string, context: AppContext): Promise<User> {
		try {
			const document = await context.connection.db.collection('users').findOne<UsersMongoDocument>({ _id: new ObjectId(id) });

			if (!document) {
				return null;
			}

			return UsersMongoDocument.deserialize(document);

		} catch (error) {
			return null;
		}
	}

	async getByEmail(email: string, context: AppContext): Promise<User> {
		try {
			const document = await context.connection.db.collection('users').findOne<UsersMongoDocument>({ email });

			if (!document) {
				return null;
			}

			return UsersMongoDocument.deserialize(document);
		} catch(error) {
			return null;
		}
	}
}
