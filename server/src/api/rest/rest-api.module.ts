import { Module } from '@nestjs/common';
import { UsersRestApiModule } from './users/users-rest.module';
import { CashflowsRestApiModule } from './cashflows/cashflows-rest.module';

@Module({
	imports: [UsersRestApiModule, CashflowsRestApiModule],
	controllers: [],
	providers: [],
})
export class RestApiModule {}
