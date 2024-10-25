import { Db } from 'mongodb';
import { FastifyContextConfig, FastifyRequestContext } from 'fastify';
import { FastifyRouteConfig } from 'fastify/types/route';

export class AppContext implements FastifyRequestContext {
	db: Db;
	config: FastifyContextConfig & FastifyRouteConfig;
}
