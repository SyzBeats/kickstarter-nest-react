import { Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/domain/users/interfaces/user.repository';
import { User } from 'src/domain/users/user';
import { UsersMongoDocument } from './users.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class UsersRepository implements IUserRepository {
  getById(userId: string): Promise<User> {
    // Todo: Example document which would have to be fetched from the database
    const userDocument: UsersMongoDocument = {
      _id: new ObjectId(userId),
      password: 'someUserPassword',
      name: 'John Doe',
      email: 'john@doe.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const deserialized = UsersMongoDocument.deserialize(userDocument);
    return Promise.resolve(deserialized);
  }
}
