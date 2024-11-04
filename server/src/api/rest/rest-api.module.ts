import { Module } from '@nestjs/common';

import { UsersRestApiModule } from './users/users-rest.module';
import { BudgetsRestApiModule } from './budgets/budgets-rest.module';

@Module({
	imports: [UsersRestApiModule, BudgetsRestApiModule],
	controllers: [],
	providers: [],
})
export class RestApiModule {}
