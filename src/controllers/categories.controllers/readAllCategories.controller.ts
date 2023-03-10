import { Request, Response } from 'express'
import { iCategories } from '../../interfaces/categories.interfaces'
import readCategoriesService from '../../services/categories.services/readCategories.service'

const readCategoriesController = async (req: Request, res: Response): Promise<Response> => {

    const categories: iCategories = await readCategoriesService()

    return res.json(categories)
}

export default readCategoriesController