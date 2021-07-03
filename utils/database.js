const pgp = require("pg-promise")();
const { ConnectionString } = require("connection-string");

let db;
if (process.env.DATABASE_URL) {
  const connection = new ConnectionString(process.env.DATABASE_URL);

  db = pgp({
    host: connection.hosts[0].name,
    port: connection.hosts[0].port,
    database: connection.path[0],
    user: connection.user,
    password: connection.password,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  console.error("DATABASE_URL not found");
}

module.exports = { pgp, db };
