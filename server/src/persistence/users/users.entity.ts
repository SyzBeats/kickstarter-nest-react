import { MongoDocument } from 'src/domain/shared/mongo.document';
import { User } from 'src/domain/users/user';

export class UsersMongoDocument extends MongoDocument {
  readonly name: string;
  readonly email: string;
  readonly password: string;

  static serialize(userDocument: User) {
    return userDocument;
  }

  static deserialize(userDocument: UsersMongoDocument): User {
    const { _id, email, name, password, createdAt, updatedAt } = userDocument;

    return {
      _id: _id.toHexString(),
      password,
      name,
      email,
      createdAt,
      updatedAt,
    };
  }
}
