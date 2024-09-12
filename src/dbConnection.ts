import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { DB_HOST, DB_NAME } from './config';
import { logger } from './common';

dotenv.config();

export const db = mongoose
  .connect(DB_HOST)
  .then((res) => {
    if (res) {
      logger.info(`Database connection succeffully to ${DB_NAME}`);
    }
  })
  .catch((err) => {
    logger.error(err);
  });
