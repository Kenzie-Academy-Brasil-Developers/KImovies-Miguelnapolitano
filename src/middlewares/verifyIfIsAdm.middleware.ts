import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors'


const verifyIfIsAdm = (req: Request, res: Response, next: NextFunction): void => {

    if(!req.user.isAdmin){
        throw new AppError("Insufficient permission", 403)
    }

    return next()
}

export default verifyIfIsAdm