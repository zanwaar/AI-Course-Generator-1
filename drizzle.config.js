/** @type { import("drizzle-kit").Config } */
const connectionString = process.env.NEXT_PUBLIC_DB_CONNECTION_STRING;
export default {
  schema: "./configs/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
      url:connectionString,
  },
};