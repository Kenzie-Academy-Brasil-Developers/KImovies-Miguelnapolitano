import { Request, Response } from 'express'
import { RealEstate } from '../../entities'
import readScheduleService from '../../services/schedules.services.ts/readSchedule.service'

const readScheduleByRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    const schedule: RealEstate = await readScheduleService(Number(req.params.id))

    return res.status(200).json(schedule)
}

export default readScheduleByRealEstateController
