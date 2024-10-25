import { Injectable } from '@nestjs/common';

import { CashflowsService } from 'src/domain/cashflows/cashflows.service';
import { UsersService } from 'src/domain/users/users.service';
import { CreateUserDto } from '../dto/user.input-dto';

import { AppContext } from 'src/aop/http/context';
import { User } from 'src/domain/users/entities/user';

@Injectable()
export class UsersMediator {
	constructor(
		private usersService: UsersService,
		private cashflowsService: CashflowsService,
	) {}

	async create(dto: CreateUserDto, appContext: AppContext) {
		// Todo: Should not be inferred but use a dedicated input interface
		return this.usersService.create(dto as User, appContext);
	}

	async getById(id: string, context: AppContext): Promise<User> {
		return this.usersService.getById(id, context);
	}

	async getAll(context: AppContext): Promise<User[]> {
		return this.usersService.getAll(context);
	}

	async update() {
		return this.usersService.update();
	}

	async delete() {
		return this.usersService.delete();
	}
}
