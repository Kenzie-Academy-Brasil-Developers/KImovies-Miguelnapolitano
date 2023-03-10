import { Router } from 'express'
import validateRequestMiddleware from '../middlewares/validateRequest.middleware'
import verifyToken from '../middlewares/verifyToken.middleware'
import verifyIfEmailExists from '../middlewares/verifyIfEmailExists.middleware'
import verifyIfIsAdm from '../middlewares/verifyIfIsAdm.middleware'
import { createUserSchema, editUserSchema } from '../schemas/users.schemas'
import verifyIfIdExists from '../middlewares/verifyIfIdExists.middleware'
import createUserController from '../controllers/users.controllers/createUser.controller'
import deleteUserController from '../controllers/users.controllers/deleteUser.controller'
import editUserController from '../controllers/users.controllers/editUser.controller'
import readAllUsersController from '../controllers/users.controllers/readAllUsersController'

const usersRoutes = Router()

usersRoutes.post(
  "",
  validateRequestMiddleware(createUserSchema),
  verifyIfEmailExists,
  createUserController
)

usersRoutes.get("", verifyToken, verifyIfIsAdm, readAllUsersController)

usersRoutes.patch("/:id", verifyIfIdExists, validateRequestMiddleware(editUserSchema), verifyIfEmailExists, verifyToken, editUserController )

usersRoutes.delete("/:id", verifyIfIdExists, verifyToken, deleteUserController)

export default usersRoutes
