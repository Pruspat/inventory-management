import express, { Express, Request, Response, NextFunction } from 'express';
import { SERVER_PORT } from './config';
import { db } from './dbConnection';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';
import { logger } from './common';

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  logger.info(`Received request: ${req.method} ${req.url}`);
  next();
});

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// eslint-disable-next-line
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  let status = 500;
  let message = 'Internal Server Error';
  logger.error(err);
  // Handle custom errors
  switch (err.statusCode) {
    case 404:
    case 400:
      status = err.statusCode;
      message = err.message;
  }
  res.json({
    status,
    message
  });
});

db.then(() => {
  app.listen(SERVER_PORT, () =>
    logger.info(`server running at http://localhost:${SERVER_PORT}`)
  );
});
