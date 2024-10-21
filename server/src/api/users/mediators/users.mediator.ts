import { Injectable } from '@nestjs/common';

import { CashflowsService } from 'src/domain/cashflows/cashflows.service';
import { UsersService } from 'src/domain/users/users.service';
import { CreateUserDto } from '../dto/user.input-dto';

@Injectable()
export class UsersMediator {
  constructor(
    private usersService: UsersService,
    private cashflowsService: CashflowsService,
  ) {}

  async create(dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  async getById() {
    return this.usersService.getById();
  }

  async getAll() {
    return this.usersService.getAll();
  }

  async update() {
    return this.usersService.update();
  }

  async delete() {
    return this.usersService.delete();
  }
}
