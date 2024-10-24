import { Inject, Injectable } from '@nestjs/common';
import { AppContext } from 'src/aop/http/context';
import { UsersRepository } from 'src/persistence/users/users.repository';
import { User } from './entities/user';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository') private usersRepository: UsersRepository,
  ) {}

  async create(input: User, context: AppContext) {
    return this.usersRepository.insert(input as User, context);
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
