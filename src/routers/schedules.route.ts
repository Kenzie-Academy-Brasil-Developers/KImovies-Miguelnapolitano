import { Router } from 'express'
import createScheduleController from '../controllers/schedules.controllers/createSchedule.controller'
import validateRequestMiddleware from '../middlewares/validateRequest.middleware'
import verifyDateAndHourMiddleware from '../middlewares/verifyHour.middleware'
import verifySchedulesMiddleware from '../middlewares/verifySchedules.middleware'
import verifyToken from '../middlewares/verifyToken.middleware'
import { createScheduleDataSchema } from '../schemas/schedules.schemas'

const schedulesRoutes = Router()

schedulesRoutes.post("/", validateRequestMiddleware(createScheduleDataSchema), verifyToken, verifyDateAndHourMiddleware,verifySchedulesMiddleware, createScheduleController)

export default schedulesRoutes