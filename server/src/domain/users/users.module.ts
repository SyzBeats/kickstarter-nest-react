import { Module } from '@nestjs/common';
import { UsersService } from './service/users.service';
import { PersistenceModule } from 'src/persistence/persistence.module';

@Module({
	imports: [PersistenceModule],
	providers: [UsersService],
	controllers: [],
	exports: [UsersService],
})
export class UsersDomainModule {}
