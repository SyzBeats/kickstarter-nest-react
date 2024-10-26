import { MongoClient } from 'mongodb';
import { FastifyContextConfig, FastifyRequestContext } from 'fastify';
import { FastifyRouteConfig } from 'fastify/types/route';
import { DbConnection } from '../db/mongo/mongo-db.middleware';

export class AppContext implements FastifyRequestContext {
	connection: DbConnection;
	// Todo: should be required
	client: MongoClient;
	config: FastifyContextConfig & FastifyRouteConfig;
}
