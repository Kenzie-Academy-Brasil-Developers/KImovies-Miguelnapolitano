import { Request, Response, NextFunction } from 'express'
import { RealEstate } from '../entities'
import { AppError } from '../errors'
import { realEstateRepository } from '../services/repositories'


const verifyIfRealEstateIdExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const id: number = Number(req.params.id)

    const findId: RealEstate | null = await realEstateRepository.findOneBy({
        id: id
    })

    if (!findId){
        throw new AppError('RealEstate not found', 404)
    }

    next()
}

export default verifyIfRealEstateIdExists