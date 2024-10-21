import { Module } from '@nestjs/common';
import { UsersApiModule } from './users/users-api.module';
import { CashflowsApiModule } from './cashflows/cashflows-api.module';

@Module({
  imports: [UsersApiModule, CashflowsApiModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
