import { Module } from '@nestjs/common';
import { CashflowsController } from './controllers/cashflows.controller';

@Module({
	imports: [],
	controllers: [CashflowsController],
	providers: [],
})
export class CashflowsRestApiModule {}
