import { Request, Response } from 'express'
import { iCategoriesWithRealEstate } from '../../interfaces/categories.interfaces'
import readRealEstateInCategorieService from '../../services/categories.services/readRealEstateInCategorie.service'


const readRealEstateInCategorieController = async (req: Request, res: Response): Promise<Response> => {

    const category: iCategoriesWithRealEstate = await readRealEstateInCategorieService(Number(req.params.id))

    return res.json(category)
}

export default readRealEstateInCategorieController