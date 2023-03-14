import { Request, Response } from 'express'
import { iRealEstates } from '../../interfaces/realEstate.interfaces'
import readRealEstatesService from '../../services/realEstate.services/readRealEstates.service'

const readRealEstatesController = async (req: Request, res: Response): Promise<Response> => {

    const realStates: iRealEstates = await readRealEstatesService()

    return res.json(realStates)
}

export default readRealEstatesController