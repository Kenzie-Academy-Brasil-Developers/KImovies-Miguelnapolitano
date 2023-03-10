import { Router } from 'express'
import createRealEstateController from '../controllers/realState.controllers/createRealEstate.controller'
import verifyIfIsAdm from '../middlewares/verifyIfIsAdm.middleware'
import verifyToken from '../middlewares/verifyToken.middleware'

const realEstateRoutes = Router()

/* -- Precisa de um middleware antes do controller para verificar endereço -- */
realEstateRoutes.post('/', verifyToken, verifyIfIsAdm, createRealEstateController)

export default realEstateRoutes