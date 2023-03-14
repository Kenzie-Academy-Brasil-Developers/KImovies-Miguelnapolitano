import { Request, Response, NextFunction } from 'express'
import { Category } from '../entities'
import { AppError } from '../errors'
import { iRealEstateRequest } from '../interfaces/realEstate.interfaces'
import { categoryRepository } from '../services/repositories'


const verifyIfCategoryAtBodyExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const requestData: iRealEstateRequest = req.body

    if(requestData.categoryId){
        const findCategory: Category | null = await categoryRepository.findOneBy({
            id: requestData.categoryId
        })
    
        if(!findCategory){
            throw new AppError('Category not found', 409)
        }
    }

    next()
}

export default verifyIfCategoryAtBodyExistsMiddleware