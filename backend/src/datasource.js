const { DataSource } = require("typeorm");
const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  username: "umar",
  password: "admin",
  database: "test_db",
  entities: [
    "dist/models/.js",
    "node_modules/@medusajs/medusa/dist/models/!(*.index.js)",
    "node_modules/medusa-plugin-interactive-360/dist/models/*.js",
  ],
  migrations: [
    "dist/migrations/.js",
    "node_modules/@medusajs/medusa/dist/migrations/*.js",
    "node_modules/medusa-plugin-interactive-360/dist/migrations/*.js",
  ],
});
module.exports = {
  datasource: AppDataSource,
};