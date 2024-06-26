const { PG_HOST, PG_DATABASE, PG_USERNAME } = process.env;

module.exports = {
  env: "development",
  PORT: process.env.SERVICES_PORT || 3005,
  DB: {
    database: PG_HOST || "map-my-world",
    host: PG_DATABASE || "localhost",
    username: PG_USERNAME || "postgres",
    dialect: "postgres",
    logging: false,
  },
};
