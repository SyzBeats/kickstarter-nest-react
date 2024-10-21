import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { LoggerMiddleware } from '../aop/logger/logger.middleware';
import { PersistenceModule } from 'src/persistence/persistence.module';
import { ApiModule } from 'src/api/api.module';

@Module({
  imports: [ApiModule, PersistenceModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
