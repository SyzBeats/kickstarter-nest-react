import { Module } from '@nestjs/common';

import { MongoDbModule } from './db/mongo/mongo-db.module';
import { AuthModule } from './authorization/authorization.module';

@Module({
	imports: [MongoDbModule, AuthModule],
	providers: [],
})
export class AopModule {}
