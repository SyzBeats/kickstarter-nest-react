import { Module } from '@nestjs/common';
import { CashflowsService } from './cashflows.service';

@Module({
	providers: [CashflowsService],
	exports: [CashflowsService],
})
export class CashflowsDomainModule {}
