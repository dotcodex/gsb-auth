import dotenv from 'dotenv';
import express from 'express';
import { login } from './auth';
import * as queueService from './services/queue-service';

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(express.json());

//Set all routes from routes folder
app.use('/login', login);

// start the express server
app.listen(port, () => {
  queueService.push('Hello');
  console.log(`server started at http://localhost:${port}`);
});
