import { Module } from '@nestjs/common';

import { UserRepositoryModule } from './users/users.repository.module';

@Module({
  imports: [UserRepositoryModule],
  exports: [UserRepositoryModule],
})
export class PersistenceModule {}
