import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { ServerError } from '../../../domain/shared/errors/server-error';
import routes from './routes';
const app = express();
app.use(express.json());
app.use(routes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ServerError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  console.log(err);
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
