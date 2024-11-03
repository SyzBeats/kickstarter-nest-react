import {Injectable} from '@nestjs/common';

import {BudgetsService} from 'src/domain/budgets/budgets.service';
import {UsersService} from 'src/domain/users/service/users.service';

import {AppContext} from 'src/aop/http/context';
import {User} from 'src/domain/users/entities/user';
import {CreateUserInput} from 'src/domain/users/inputs/create-user.input';

@Injectable()
export class UsersMediator {
    constructor(
        private usersService: UsersService,
        private budgetsService: BudgetsService,
    ) {
    }

    async create(dto: CreateUserInput, context: AppContext) {
        return context.connection.withTransaction(async () => {
			console.log("...")
            return this.usersService.create(dto, context);
        })
    }

    async getById(id: string, context: AppContext): Promise<User> {
        return context.connection.withTransaction(async () => {
            return this.usersService.getById(id, context);
        });
    }

    async getAll(context: AppContext): Promise<User[]> {
        return context.connection.withTransaction(async () => {
            return this.usersService.getAll(context);
        });
    }

    async update() {
        return this.usersService.update();
    }

    async delete() {
        return this.usersService.delete();
    }
}
