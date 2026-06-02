const { Pool } = require("pg");

let pool;

function isDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

function getPool() {
  if (!isDatabaseConfigured()) {
    return null;
  }

  if (!pool) {
    const useSsl = process.env.PGSSL === "true" || process.env.NODE_ENV === "production";

    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: useSsl ? { rejectUnauthorized: false } : undefined
    });
  }

  return pool;
}

async function query(sql, params = []) {
  const client = getPool();

  if (!client) {
    return null;
  }

  return client.query(sql, params);
}

module.exports = {
  isDatabaseConfigured,
  query
};
