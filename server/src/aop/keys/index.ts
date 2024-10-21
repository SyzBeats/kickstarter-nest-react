// Ensures .env ist loaded within non module file
import 'dotenv/config';

const keys = {
  port: process.env.PORT ?? 3000,
  isProd: process.env.NODE_NEV === 'production',
  mongoUri: process.env.MONGO_URI ?? '',
  mongoPoolSize: 5,
  dbName: 'budget-planner',
};

export default keys;
