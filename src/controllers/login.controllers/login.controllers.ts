import { Request, Response } from "express";
import { iLoginRequest } from "../../interfaces/login.interfaces";
import loginService from "../../services/login.services/login.service";

const loginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginData: iLoginRequest = req.body;

  const token: string = await loginService(loginData);

  return res.json({ token: token });
};

export default loginController;
