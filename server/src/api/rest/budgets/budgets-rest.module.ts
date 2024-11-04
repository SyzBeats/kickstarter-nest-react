import { Module } from '@nestjs/common';

import { BudgetsController } from './controllers/budgets.controller';

@Module({
	imports: [],
	controllers: [BudgetsController],
	providers: [],
})
export class BudgetsRestApiModule {}
