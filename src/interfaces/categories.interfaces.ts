import { z } from 'zod'
import { createCategorySchema, returnCategoriesSchema, returnCategorySchema } from '../schemas/category.schemas'


type iCategoryRequest = z.infer<typeof createCategorySchema>
type iCategory = z.infer<typeof returnCategorySchema>
type iCategories = z.infer<typeof returnCategoriesSchema>

export { iCategoryRequest, iCategory, iCategories }