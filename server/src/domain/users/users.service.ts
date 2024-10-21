import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async create() {}

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
