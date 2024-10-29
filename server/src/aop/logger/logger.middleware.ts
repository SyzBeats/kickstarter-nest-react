import { Injectable, NestMiddleware } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	use(
		req: FastifyRequest['raw'],
		res: FastifyReply['raw'],
		next: () => void,
	) {
		const start = Date.now();

		res.on('finish', () => {
			const duration = Date.now() - start;
			const message = `[${req.method} ${req.url}] -> ${res.statusCode} (${duration}ms)`;

			// Slow request detection
			if (duration > 500) {
				console.warn(message);
				return;
			}

			console.info(message);
		});

		next();
	}
}
