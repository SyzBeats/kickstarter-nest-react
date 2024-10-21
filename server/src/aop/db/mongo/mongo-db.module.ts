import { Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import keys from 'src/aop/keys';

const { mongoUri, mongoPoolSize } = keys;

const databaseProviders = [
  {
    provide: 'MONGO_DB_CLIENT',
    useFactory: async (): Promise<MongoClient> => {
      try {
        const client = await MongoClient.connect(mongoUri, {
          minPoolSize: mongoPoolSize,
        });

        console.info('[DB]: 🟢 Successfully connected to mongodb');

        return client;
      } catch (e) {
        console.error('Connection failure');
      }
    },
  },
];

@Module({
  imports: [],
  controllers: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class MongoDbModule {}
