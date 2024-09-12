import express, { Express } from 'express';
import { SERVER_PORT } from './config';
import { db } from './dbConnection';

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + TypeScript Server");
// });

db.then(() => {
  app.listen(SERVER_PORT, () =>
    console.log(`server running at http://localhost:${SERVER_PORT}`)
  );
});
