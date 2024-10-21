import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './root.module';
import bootstrapSwagger from '../aop/swagger';
import { ValidationPipe } from '@nestjs/common';
import keys from 'src/aop/keys';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  bootstrapSwagger(app);

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: !!keys.isProd,
    }),
  );

  await app.listen({
    port: 3000,
  });
}

bootstrap();
