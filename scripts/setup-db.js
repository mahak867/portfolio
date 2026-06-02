require("dotenv").config();

const fs = require("fs/promises");
const path = require("path");
const { Pool } = require("pg");

async function runSqlFile(pool, fileName) {
  const filePath = path.join(__dirname, "..", "database", fileName);
  const sql = await fs.readFile(filePath, "utf8");
  await pool.query(sql);
  console.log(`Applied ${fileName}`);
}

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is required. Copy .env.example to .env and update it first.");
  }

  const useSsl = process.env.PGSSL === "true" || process.env.NODE_ENV === "production";
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: useSsl ? { rejectUnauthorized: false } : undefined
  });

  try {
    await runSqlFile(pool, "schema.sql");
    await runSqlFile(pool, "seed.sql");
    console.log("Database setup complete.");
  } finally {
    await pool.end();
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
