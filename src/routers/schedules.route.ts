import { Router } from 'express'
import createScheduleController from '../controllers/schedules.controllers/createSchedule.controller'
import readScheduleByRealEstateController from '../controllers/schedules.controllers/readScheduleByRealEstate.controller'
import validateRequestMiddleware from '../middlewares/validateRequest.middleware'
import verifyDateAndHourMiddleware from '../middlewares/verifyHour.middleware'
import verifyIfIsAdm from '../middlewares/verifyIfIsAdm.middleware'
import verifyIfRealEstateIdExists from '../middlewares/verifyIfRealEstateIdExists.middleware'
import verifySchedulesMiddleware from '../middlewares/verifySchedules.middleware'
import verifyToken from '../middlewares/verifyToken.middleware'
import { createScheduleDataSchema } from '../schemas/schedules.schemas'

const schedulesRoutes = Router()

schedulesRoutes.post("/", verifyToken, validateRequestMiddleware(createScheduleDataSchema), verifyDateAndHourMiddleware,verifySchedulesMiddleware, createScheduleController)

schedulesRoutes.get("/realEstate/:id", verifyToken, verifyIfIsAdm, verifyIfRealEstateIdExists, readScheduleByRealEstateController)

export default schedulesRoutes