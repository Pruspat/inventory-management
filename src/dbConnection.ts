import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { DB_HOST, DB_NAME } from './config';

dotenv.config();

export const db = mongoose
  .connect(DB_HOST)
  .then((res) => {
    if (res) {
      console.log(`Database connection succeffully to ${DB_NAME}`);
    }
  })
  .catch((err) => {
    console.log(err);
  });
