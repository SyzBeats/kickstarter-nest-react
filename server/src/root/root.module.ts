import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { PersistenceModule } from 'src/persistence/persistence.module';
import { ApiModule } from 'src/api/api.module';
import { AopModule } from 'src/aop/aop.module';

import { LoggerMiddleware } from '../aop/logger/logger.middleware';

@Module({
  imports: [AopModule, ApiModule, PersistenceModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
