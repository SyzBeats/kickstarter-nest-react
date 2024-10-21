// Ensures .env ist loaded within non module file
import 'dotenv/config';

const keys = {
  port: process.env.PORT ?? 3000,
  mongoUri: process.env.MONGO_URI ?? '',
  mongoPoolSize: 5,
};

export default keys;
