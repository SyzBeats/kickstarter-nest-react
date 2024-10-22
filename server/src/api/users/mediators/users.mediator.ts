import { Injectable } from '@nestjs/common';

import { CashflowsService } from 'src/domain/cashflows/cashflows.service';
import { UsersService } from 'src/domain/users/users.service';
import { CreateUserDto } from '../dto/user.input-dto';

import { AppContext } from 'src/aop/http/context';
import { User } from 'src/domain/users/user';

@Injectable()
export class UsersMediator {
  constructor(
    private usersService: UsersService,
    private cashflowsService: CashflowsService,
  ) {}

  async create(dto: CreateUserDto, appContext: AppContext) {
    return this.usersService.create(dto, appContext);
  }

  async getById(id: string, context: AppContext): Promise<User> {
    return this.usersService.getById(id, context);
  }

  async getAll(context: AppContext): Promise<User[]> {
    return this.usersService.getAll(context);
  }

  async update() {
    return this.usersService.update();
  }

  async delete() {
    return this.usersService.delete();
  }
}
