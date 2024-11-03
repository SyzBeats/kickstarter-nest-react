import { Module } from '@nestjs/common';

import { UsersDomainModule } from 'src/domain/users/users.module';
import { BudgetsDomainModule } from 'src/domain/budgets/budgets.module';

import { UsersController } from './controllers/users.controller';
import { UsersMediator } from './mediators/users.mediator';

@Module({
	imports: [UsersDomainModule, BudgetsDomainModule],
	controllers: [UsersController],
	providers: [UsersMediator],
})
export class UsersRestApiModule {}
