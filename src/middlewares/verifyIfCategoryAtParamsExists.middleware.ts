import { Request, Response, NextFunction } from 'express'
import { Category } from '../entities'
import { AppError } from '../errors'
import { categoryRepository } from '../services/repositories'

const verifyIfCategoryAtParamsExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const findCategory: Category | null = await categoryRepository.findOneBy({
        id: Number(req.params.id)
    })

    if(!findCategory){
        throw new AppError('Category not found', 404)
    }


    next()
}

export default verifyIfCategoryAtParamsExistsMiddleware