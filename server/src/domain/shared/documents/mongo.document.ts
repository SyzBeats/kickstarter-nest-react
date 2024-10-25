import { ObjectId } from 'mongodb';

export class MongoDocument {
	_id: ObjectId | undefined;
	readonly createdAt: Date;
	readonly updatedAt: Date;
}
