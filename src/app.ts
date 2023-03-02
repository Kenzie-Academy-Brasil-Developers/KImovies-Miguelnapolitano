import express, { Application } from 'express'
//import handdleErrors from "./erros/handleErros.errors";
//import 'express-async-errors';
//import moviesRouter from "./routers/movies.routers";


const app: Application = express();
app.use(express.json());


//app.use(handdleErrors);

export default app;