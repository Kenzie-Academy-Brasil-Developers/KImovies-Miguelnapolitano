import { Request, Response } from 'express'
import { iCategory } from '../../interfaces/categories.interfaces'
import createCategoryService from '../../services/categories.services/createCategory.service'

const createCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const newCategory: iCategory = await createCategoryService(req.body)

    return res.status(201).json(newCategory)
}

export default createCategoryController