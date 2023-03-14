import { NextFunction, Request, Response } from 'express'
import { any, ZodTypeAny } from 'zod'

const validateRequestMiddleware =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validatedData: any = schema.parse(req.body);

    req.body = validatedData;

    return next();
  };

export default validateRequestMiddleware;