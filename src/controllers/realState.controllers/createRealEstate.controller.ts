import { Request, Response } from 'express'
import { iRealEstate } from '../../interfaces/realEstate.interfaces'
import createRealEstateService from '../../services/realEstate.services/createRealEstate.service'


const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    const newRealState: iRealEstate = await createRealEstateService(req.body)

    return res.status(201).json(newRealState)
}

export default createRealEstateController