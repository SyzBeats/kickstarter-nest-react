import { Injectable } from '@nestjs/common';
import { CashflowsService } from 'src/domain/cashflows/cashflows.service';
import { UsersService } from 'src/domain/users/users.service';

@Injectable()
export class UsersMediator {
  constructor(
    private usersService: UsersService,
    private cashflowsService: CashflowsService,
  ) {}
}
