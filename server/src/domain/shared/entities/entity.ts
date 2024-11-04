export abstract class EntityBase {
	#_id: string | null;
	#createdAt: Date;
	#updatedAt: Date;

	protected constructor(
		_id: string | null,
		createdAt: Date,
		updatedAt: Date,
	) {
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
