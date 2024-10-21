const keys = {
  port: process.env.PORT ?? 3000,
  mongoUri:
    process.env.MONGO_URI ?? 'mongodb://r00t:iamSuper!ns3cur3@mongo-db:27017/',
  mongoPoolSize: 5,
};

export default keys;
