import { Router } from 'express'
import { createUserController } from '../controllers/users.controllers/users.controllers'
import validateRequestMiddleware from '../middlewares/validateRequest.middleware'
import verifyIfEmailExists from '../middlewares/verifyIfEmailExists.middleware'
import { createUserSchema } from '../schemas/users.schemas'

const usersRoutes = Router()

usersRoutes.post(
  "",
  validateRequestMiddleware(createUserSchema), verifyIfEmailExists,
  createUserController
)

export default usersRoutes
