import { Request, Response } from 'express'
import createScheduleService from '../../services/schedules.services.ts/createSchedule.service'

const createScheduleController = async (req: Request, res: Response): Promise<Response> => {

    await createScheduleService(req.body, Number(req.user.id))

    return res.status(201).json({
        message: "Schedule created"
    })
}

export default createScheduleController