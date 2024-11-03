import { FastifyRequest, FastifyReply } from 'fastify';
import { AppContext } from './context';

export const contextMiddleware = (
	req: FastifyRequest,
	_: FastifyReply,
	next: () => null,
): void => {
	req.appContext = new AppContext();

	next();
};
