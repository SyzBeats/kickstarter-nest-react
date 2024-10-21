import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/api/users/dto/user.input-dto';

@Injectable()
export class UsersService {
  async create(input: CreateUserDto) {
    console.log(input);
  }

  async getById() {
    return 'User by ID';
  }

  async getAll() {
    return 'All users';
  }

  async update() {
    return 'updated';
  }

  async delete() {
    return 'deleted';
  }
}
