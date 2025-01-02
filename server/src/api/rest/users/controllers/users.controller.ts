import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FastifyRequest } from 'fastify';
import { User } from 'src/domain/users/entities/user';

import { UsersMediator } from '../mediators/users.mediator';
import { CreateUserInputDto } from '../dto/user.input-dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
	constructor(private usersMediator: UsersMediator) {}

	@Post()
	async create(@Req() request: FastifyRequest['raw'], @Body() dto: CreateUserInputDto) {
		return this.usersMediator.create(dto, request['raw'].appContext);
	}

	@Get()
	async getAll(@Req() request: FastifyRequest['raw']): Promise<User[]> {
		return this.usersMediator.getAll(request['raw'].appContext);
	}

	@Get('/:id')
	async getById(@Param('id') id: string, @Req() request: FastifyRequest['raw']): Promise<User> {
		return this.usersMediator.getById(id, request['raw'].appContext);
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
