import dotenv from 'dotenv';
import express from 'express';
import { login } from './auth';
dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.json());

//Set all routes from routes folder
app.post('/login', login);

// start the express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
