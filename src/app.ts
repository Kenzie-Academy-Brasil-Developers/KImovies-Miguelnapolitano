import express, { Application } from 'express'
import handdleErrors from './errors';
import 'express-async-errors';
import { categoriesRoutes, loginRoutes, realEstateRoutes, schedulesRoutes, usersRoutes } from './routers';


const app: Application = express();
app.use(express.json());

app.use("/users", usersRoutes)
app.use("/realEstate", realEstateRoutes)
app.use("/schedules", schedulesRoutes)
app.use("/categories", categoriesRoutes)
app.use("/login", loginRoutes)

app.use(handdleErrors);

export default app;