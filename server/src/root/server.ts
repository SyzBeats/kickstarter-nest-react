import { NestFactory } from '@nestjs/core';
import {
	FastifyAdapter,
	NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import keys from 'src/aop/keys';
import { AuthenticationGuard } from 'src/aop/authorization/guards/authentication.guard';

import bootstrapSwagger from '../aop/swagger';
import { AppModule } from './root.module';

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

	// JWT verification for all routes that are not marked as public
	app.useGlobalGuards(app.get(AuthenticationGuard));

	await app.listen({
		port: 3000,
	});
}

bootstrap();
