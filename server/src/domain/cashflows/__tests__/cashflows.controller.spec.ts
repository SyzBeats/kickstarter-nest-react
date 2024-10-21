import { Test, TestingModule } from '@nestjs/testing';
import { CashflowsController } from '../../api/cashflows/controllers/cashflows.controller';

describe('CashflowsController', () => {
  let controller: CashflowsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CashflowsController],
    }).compile();

    controller = module.get<CashflowsController>(CashflowsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
