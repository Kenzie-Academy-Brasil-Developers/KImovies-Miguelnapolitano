import express, { Application } from 'express'
import handdleErrors from "./errors/handleErrors.error";
import 'express-async-errors';


const app: Application = express();
app.use(express.json());


app.use(handdleErrors);

export default app;