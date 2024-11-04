import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PersistenceModule } from 'src/persistence/persistence.module';
import { AopModule } from 'src/aop/aop.module';
import { contextMiddleware } from 'src/aop/http/context.middleware';
import { MongoDbMiddleware } from 'src/aop/db/mongo/mongo-db.middleware';
import { MongoDbModule } from 'src/aop/db/mongo/mongo-db.module';
import { ApiModule } from 'src/api/api.module';

import { LoggerMiddleware } from '../aop/logger/logger.middleware';

@Module({
	imports: [
		AopModule,
		ApiModule,
		MongoDbModule,
		PersistenceModule,
		ConfigModule.forRoot({ isGlobal: true }),
	],
	controllers: [],
	providers: [],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes('*');
		consumer.apply(contextMiddleware).forRoutes('*');
		consumer.apply(MongoDbMiddleware).forRoutes('*');
	}
}
