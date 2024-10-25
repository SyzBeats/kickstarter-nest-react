export abstract class Entity {
	#_id: string | null;
	#createdAt: Date;
	#updatedAt: Date;

	constructor(_id: string | null, createdAt: Date, updatedAt: Date) {
		this.#_id = _id;
		this.#createdAt = createdAt;
		this.#updatedAt = updatedAt;
	}

	//* GETTERS *//

	get _id(): string | null {
		return this.#_id;
	}

	get createdAt(): Date {
		return this.#createdAt;
	}

	get updatedAt(): Date {
		return this.#updatedAt;
	}
}
