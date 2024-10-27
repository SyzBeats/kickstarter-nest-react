import { Module } from '@nestjs/common';

import { MongoDbModule } from './db/mongo/mongo-db.module';
import { AuthModule } from './authorization/authorization.module';

@Module({
	imports: [MongoDbModule, AuthModule],
	controllers: [],
	providers: [],
})
export class AopModule {}
