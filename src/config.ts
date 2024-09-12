import dotenv from 'dotenv';
dotenv.config();

export const SERVER_PORT = process.env.PORT || 3000;
export const DB_HOST =
  process.env.DB_HOST || 'mongodb://admin:admin@localhost:27017/admin';
export const DB_NAME = process.env.DB_NAME || 'inventory-management';
