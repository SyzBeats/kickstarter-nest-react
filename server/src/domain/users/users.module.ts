import { Module } from '@nestjs/common';
import { PersistenceModule } from 'src/persistence/persistence.module';

import { UsersService } from './service/users.service';

@Module({
	imports: [PersistenceModule],
	providers: [UsersService],
	controllers: [],
	exports: [UsersService],
})
export class UsersDomainModule {}
