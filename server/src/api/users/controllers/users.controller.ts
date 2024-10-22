import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FastifyRequest } from 'fastify';

import { User } from 'src/domain/users/user';

import { UsersMediator } from '../mediators/users.mediator';
import { CreateUserDto } from '../dto/user.input-dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private usersMediator: UsersMediator) {}

  @Post()
  async create(@Req() request: FastifyRequest, @Body() dto: CreateUserDto) {
    return this.usersMediator.create(dto, request.appContext);
  }

  @Get()
  async getAll() {
    return this.usersMediator.getAll();
  }

  @Get('/:id')
  async getById(
    @Param('id') id: string,
    @Req() request: FastifyRequest,
  ): Promise<User> {
    return this.usersMediator.getById(id, request.appContext);
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
