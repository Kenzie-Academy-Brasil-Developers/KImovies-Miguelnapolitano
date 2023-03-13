import { z } from 'zod'
// import { realEstateForCategoryList } from './realEstate.schemas'

const createCategorySchema = z.object({
    name: z.string().max(45)
})

const returnCategorySchema = createCategorySchema.extend({
    id: z.number()
})

// const returnCategorieWithRealStateSchema = returnCategorySchema.extend({
//     realEstate: realEstateForCategoryList.array()
// })

const returnCategoriesSchema = returnCategorySchema.array()

export { createCategorySchema, returnCategorySchema, returnCategoriesSchema }