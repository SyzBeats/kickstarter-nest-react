import { FastifyRequest, FastifyReply } from 'fastify';
import { AppContext } from './context';

declare module 'fastify' {
	interface FastifyRequest {
		appContext: AppContext;
	}
}

declare module 'http' {
	interface IncomingMessage {
		appContext?: AppContext;
	}
}

export const contextMiddleware = (
	req: FastifyRequest,
	_: FastifyReply,
	next: () => null,
): void => {
	req.appContext = new AppContext();

	next();
};
