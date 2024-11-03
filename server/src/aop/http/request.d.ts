import {AppContext} from "./context";

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