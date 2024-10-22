import { Inject, Injectable } from '@nestjs/common';
import { AppContext } from 'src/aop/http/context';
import { CreateUserDto } from 'src/api/users/dto/user.input-dto';
import { UsersRepository } from 'src/persistence/users/users.repository';
import { User } from './user';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository') private usersRepository: UsersRepository,
  ) {}

  async create(input: CreateUserDto, context: AppContext) {
    return this.usersRepository.insert(input, context);
  }

  async getById(id: string, context: AppContext): Promise<User> {
    return this.usersRepository.getById(id, context);
  }

  async getAll(context: AppContext): Promise<User[]> {
    return this.usersRepository.getAll(context);
  }

  async update() {
    return 'updated';
  }

  async delete() {
    return 'deleted';
  }
}
