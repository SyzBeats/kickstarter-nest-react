import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { AppContext } from 'src/aop/http/context';
import { UsersRepository } from 'src/persistence/users/users.repository';

import { User } from '../entities/user';
import { CreateUserInput } from '../inputs/create-user.input';
import { UserFactory } from '../factories/user.factory';

@Injectable()
export class UsersService {
	constructor(@Inject('UsersRepository') private usersRepository: UsersRepository) {}

	async create(input: CreateUserInput, context: AppContext) {
		const found = await this.getByEmail(input.email, context);

		if (found) {
			throw new ConflictException();
		}

		const user = UserFactory.create(input);

		return this.usersRepository.insert(user, context);
	}

	async getById(id: string, context: AppContext): Promise<User> {
		return this.usersRepository.getById(id, context);
	}

	async getByEmail(email: string, context: AppContext): Promise<User> {
		return this.usersRepository.getByEmail(email, context);
	}

	async getAll(context: AppContext): Promise<User[]> {
		return this.usersRepository.getAll(context);
	}

	async update() {
		return 'updated';
	}

	async delete() {
		return 'deleted';
	}
}
