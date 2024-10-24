import { Injectable, NotFoundException } from '@nestjs/common';
import { IUserRepository } from 'src/domain/users/interfaces/user.repository.interface';
import { UsersMongoDocument } from './users.entity';
import { AppContext } from 'src/aop/http/context';
import { ObjectId } from 'mongodb';
import { User } from 'src/domain/users/entities/user';

@Injectable()
export class UsersRepository implements IUserRepository {
  async insert(input: User, context: AppContext): Promise<User> {
    // Todo: Should be strict User type
    const document = UsersMongoDocument.serialize(input);

    const userDocument = await context.db.collection('users').insertOne({
      ...document,
    });

    const deserialized = UsersMongoDocument.appendId(
      document,
      userDocument.insertedId,
    );

    return deserialized;
  }

  async getAll(context: AppContext): Promise<User[]> {
    const documents = await context.db
      .collection('users')
      .find<UsersMongoDocument>({})
      .toArray();

    return documents.map(UsersMongoDocument.deserialize);
  }

  async getById(id: string, context: AppContext): Promise<User> {
    const document = await context.db
      .collection('users')
      .findOne<UsersMongoDocument>({ _id: new ObjectId(id) });

    if (!document) {
      throw new NotFoundException('Could not find user');
    }

    return UsersMongoDocument.deserialize(document);
  }
}
