import { EntityBase } from '../entity';

export class EntityBaseMock extends EntityBase {
	constructor(id: string | null, createdAt: Date, updatedAt: Date) {
		super(id, createdAt, updatedAt);
	}
}
