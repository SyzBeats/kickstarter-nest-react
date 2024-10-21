import { Provider } from '@nestjs/common';
import { UsersRepository } from './users.repository';

export const UsersRepositoryProvider: Provider = {
  provide: 'UsersRepository',
  useClass: UsersRepository,
};
