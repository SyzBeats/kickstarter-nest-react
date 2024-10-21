import { Module } from '@nestjs/common';

import { MongoDbModule } from './db/mongo/mongo-db.module';

@Module({
  imports: [MongoDbModule],
  providers: [],
})
export class AopModule {}
