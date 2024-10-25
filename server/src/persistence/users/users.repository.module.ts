import { Module } from '@nestjs/common';

import { UsersRepositoryProvider } from './users.repository.provider';

@Module({
	imports: [],
	providers: [UsersRepositoryProvider],
	exports: [UsersRepositoryProvider],
})
export class UserRepositoryModule {}
