import { ObjectId } from 'mongodb';
import { MongoDocument } from 'src/domain/shared/mongo.document';
import { User } from 'src/domain/users/user';

export class UsersMongoDocument extends MongoDocument {
  readonly name: string;
  readonly email: string;

  static serialize(userDocument: User) {
    const { _id, createdAt, updatedAt, name, email } = userDocument;

    return {
      _id: _id ? new ObjectId(_id) : null,
      name,
      email,
      createdAt,
      updatedAt,
    };
  }

  static deserialize(userDocument: UsersMongoDocument): User {
    const { _id, email, name, createdAt, updatedAt } = userDocument;

    return {
      _id: _id.toHexString(),
      name,
      email,
      createdAt,
      updatedAt,
    };
  }

  static appendId(document: UsersMongoDocument, _id: ObjectId): User {
    document._id = _id;

    return this.deserialize(document);
  }
}
