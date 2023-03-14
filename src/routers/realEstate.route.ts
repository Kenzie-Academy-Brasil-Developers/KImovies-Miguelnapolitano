import { Router } from 'express'
import createRealEstateController from '../controllers/realState.controllers/createRealEstate.controller'
import readRealEstatesController from '../controllers/realState.controllers/readAllRealEstates.controller'
import validateRequestMiddleware from '../middlewares/validateRequest.middleware'
import verifyIfCategoryAtBodyExistsMiddleware from '../middlewares/verifyIfCategoryAtBodyExists.middleware'
import verifyIfIsAdm from '../middlewares/verifyIfIsAdm.middleware'
import verifyToken from '../middlewares/verifyToken.middleware'
import { realEstateRequestSchema } from '../schemas/realEstate.schemas'

const realEstateRoutes = Router()

realEstateRoutes.post("/", verifyToken, verifyIfIsAdm, validateRequestMiddleware(realEstateRequestSchema), verifyIfCategoryAtBodyExistsMiddleware, createRealEstateController)

realEstateRoutes.get("/", readRealEstatesController)

export default realEstateRoutes