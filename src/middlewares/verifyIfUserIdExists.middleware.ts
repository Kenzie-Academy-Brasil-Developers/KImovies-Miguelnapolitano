import { NextFunction, Request, Response } from 'express'
import { User } from '../entities'
import { AppError } from '../errors'
import { userRepository } from '../services/repositories'

const verifyIfUserIdExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const id: number = Number(req.params.id)

    const findId: User | null = await userRepository.findOneBy({
        id: id
    })

    if (!findId){
        throw new AppError('User not found', 404)
    }

    next()
}

export default verifyIfUserIdExists