import { Module } from '@nestjs/common';

import { UsersDomainModule } from 'src/domain/users/users.module';
import { CashflowsDomainModule } from 'src/domain/cashflows/cashflows.module';

import { UsersController } from './controllers/users.controller';
import { UsersMediator } from './mediators/users.mediator';

@Module({
	imports: [UsersDomainModule, CashflowsDomainModule],
	controllers: [UsersController],
	providers: [UsersMediator],
})
export class UsersRestApiModule {}
