import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors'
import { userRepository } from '../services/repositories'


const verifyIfEmailExists = async (req:Request, res:Response, next: NextFunction): Promise<void> => {

    if(req.body.email){

        const findEmail = await userRepository.findOne({
            where: {
                email: req.body.email 
            }
        })
    
        if (findEmail) {
            throw new AppError('Email already exists', 409)
        }
    }

    next()
}

export default verifyIfEmailExists