import { Request, Response } from 'express'
import readRealEstateInCategorieService from '../../services/categories.services/readRealEstateInCategorie.service'


const readRealEstateInCategorieController = async (req: Request, res: Response): Promise<Response> => {

    const category = await readRealEstateInCategorieService(Number(req.params.id))

    return res.json(category)
}

export default readRealEstateInCategorieController