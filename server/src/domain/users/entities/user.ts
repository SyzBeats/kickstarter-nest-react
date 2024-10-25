import { Entity } from 'src/domain/shared/entities/entity';

export class User extends Entity {
	#firstName: string;
	#lastName: string;
	#email: string;
	#password: string;

	constructor(
		_id: string | null,
		createdAt: Date,
		updatedAt: Date,
		firstName: string,
		lastName: string,
		email: string,
		password: string,
	) {
		super(_id, createdAt, updatedAt);
		this.#firstName = firstName;
		this.#lastName = lastName;
		this.#email = email;
		this.#password = password;
	}

	get firstName(): string {
		return this.#firstName;
	}

	get lastName(): string {
		return this.#lastName;
	}

	get name(): string {
		return `${this.#firstName} ${this.#lastName}`;
	}

	get email(): string {
		return this.#email;
	}

	get password(): string {
		return this.#password;
	}
}
