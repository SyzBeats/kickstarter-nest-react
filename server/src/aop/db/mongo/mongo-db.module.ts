import { Module } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';
import keys from 'src/aop/keys';

const { mongoUri, mongoPoolSize } = keys;
/**
 * This application does not need multi-tenancy. However, if one would decide to implement it, this would
 * be the appropriate place. To realize multi tenancy, the following components would have to be modified:
 * Instead of passing the DB directly, we could make use of the
 * request context that should contain a key like "tenant" or "namespace". This key would then be used
 * to connect to the right database first and pass it to the app.
 *
 * Other modules can then make use of it via `constructor(@Inject('MONGO_DB_CLIENT') private db: Db) {}`
 * */

const databaseProviders = [
  {
    provide: 'MONGO_DB_CLIENT',
    useFactory: async (): Promise<Db> => {
      try {
        const client = await MongoClient.connect(mongoUri, {
          minPoolSize: mongoPoolSize,
        });

        console.info(
          `[DB]: 🟢 Successfully connected to mongodb and database "${keys.dbName}"`,
        );

        // [OPTIONAL] If multi tenancy is needed, see comment above and implement accordingly
        // based on the request context
        return client.db(keys.dbName);
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
