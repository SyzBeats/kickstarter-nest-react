import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersMediator } from '../mediators/users.mediator';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private usersMediator: UsersMediator) {}

  async getById() {}
}
