import { ObjectId } from 'mongodb';
import { MongoDocument } from 'src/domain/shared/documents/mongo.document';
import { User } from 'src/domain/users/entities/user';

export class UsersMongoDocument extends MongoDocument {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;

  static serialize(userDocument: User): UsersMongoDocument {
    const { _id, createdAt, updatedAt, firstName, lastName, email, password } =
      userDocument;

    return {
      _id: _id ? new ObjectId(_id) : null,
      firstName,
      lastName,
      email,
      password,
      createdAt,
      updatedAt,
    };
  }

  // Todo: specify
  static deserialize(userDocument: UsersMongoDocument): User {
    const { _id, email, firstName, lastName, createdAt, updatedAt, password } =
      userDocument;

    return new User(
      _id?.toHexString(),
      createdAt,
      updatedAt,
      firstName,
      lastName,
      email,
      password,
    );
  }

  static appendId(document: UsersMongoDocument, _id: ObjectId): User {
    document._id = _id;

    return this.deserialize(document);
  }
}
