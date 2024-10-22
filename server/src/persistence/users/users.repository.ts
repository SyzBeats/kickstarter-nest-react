import { Injectable, NotFoundException } from '@nestjs/common';
import { IUserRepository } from 'src/domain/users/interfaces/user.repository';
import { User } from 'src/domain/users/user';
import { UsersMongoDocument } from './users.entity';
import { CreateUserDto } from 'src/api/users/dto/user.input-dto';
import { AppContext } from 'src/aop/http/context';
import { ObjectId } from 'mongodb';

@Injectable()
export class UsersRepository implements IUserRepository {
  async insert(input: CreateUserDto, context: AppContext): Promise<User> {
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
