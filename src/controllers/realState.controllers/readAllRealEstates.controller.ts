import { Request, Response } from 'express'
import { iRealEstate, iRealEstates } from '../../interfaces/realEstate.interfaces'
import readRealEstatesService from '../../services/realEstate.services/readRealEstates.service'

const readRealEstatesController = async (req: Request, res: Response): Promise<Response> => {

    const realStates: iRealEstates = await readRealEstatesService()

    return res.status(200).json(realStates)
}

export default readRealEstatesController