import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UsersMediator } from '../mediators/users.mediator';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private usersMediator: UsersMediator) {}

  @Post()
  async create() {
    return this.usersMediator.create();
  }

  @Get()
  async getAll() {
    return this.usersMediator.getAll();
  }

  @Get('/:id')
  async getById() {
    return this.usersMediator.getById();
  }

  @Put()
  async update() {
    return this.usersMediator.update();
  }

  @Delete('/:id')
  async delete() {
    return this.usersMediator.delete();
  }
}
