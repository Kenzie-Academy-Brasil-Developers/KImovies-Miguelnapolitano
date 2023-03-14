import { DeepPartial } from 'typeorm'
import { z } from 'zod'
import { createCategorySchema, returnCategoriesSchema, returnCategoriesWithRealStateSchema, returnCategorySchema } from '../schemas/category.schemas'

type iCategoryRequest = z.infer<typeof createCategorySchema>
type iCategory = z.infer<typeof returnCategorySchema>
type iCategories = z.infer<typeof returnCategoriesSchema>
type iCategoriesWithRealEstate = DeepPartial<z.infer<typeof returnCategoriesWithRealStateSchema>> 

export { iCategoryRequest, iCategory, iCategories, iCategoriesWithRealEstate }