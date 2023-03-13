import { Request, Response } from 'express'
import { iSchedule } from '../../interfaces/schedules.interfaces'
import createScheduleService from '../../services/schedules.services.ts/createSchedule.service'

const createScheduleController = async (req: Request, res: Response): Promise<Response> => {

    const newSchedule: iSchedule = await createScheduleService(req.body, Number(req.user.id))

    return res.status(201).json(newSchedule)
}

export default createScheduleController