import { Router } from "express";
import loginController from "../controllers/login.controllers/login.controllers";
import validateRequestMiddleware from "../middlewares/validateRequest.middleware";
import loginSchema from "../schemas/login.schemas";

const loginRoutes = Router();

loginRoutes.post("", validateRequestMiddleware(loginSchema), loginController);

export default loginRoutes;
