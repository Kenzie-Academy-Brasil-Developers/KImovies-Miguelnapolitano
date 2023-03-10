import { Router } from 'express'
import createCategoryController from '../controllers/categories.controllers/createCategory.controller'
import readCategoriesController from '../controllers/categories.controllers/readAllCategories.controller'
import verifyIfIsAdm from '../middlewares/verifyIfIsAdm.middleware'
import verifyToken from '../middlewares/verifyToken.middleware'

const categoriesRoutes = Router()

categoriesRoutes.post("/", verifyToken, verifyIfIsAdm, createCategoryController)

categoriesRoutes.get("/", readCategoriesController)

export default categoriesRoutes