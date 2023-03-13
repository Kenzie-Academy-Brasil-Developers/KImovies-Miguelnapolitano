import { Request, Response } from 'express'
import readScheduleService from '../../services/schedules.services.ts/readSchedule.service'

const readScheduleByRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    const schedule = await readScheduleService(Number(req.params.id))

    return res.status(200).json(schedule)
}

export default readScheduleByRealEstateController
