import { z } from 'zod'

const createCategorySchema = z.object({
    name: z.string().max(45)
})

const returnCategorySchema = createCategorySchema.extend({
    id: z.number()
})

const returnCategoriesWithRealStateSchema = returnCategorySchema.extend({
    realEstate: z.object({
        id: z.number(),
        sold: z.boolean(),
        value: z.string().or(z.number()),
        size: z.number(),
        createdAt: z.string(),
        updatedAt: z.string()
    }).array()
})

const returnCategoriesSchema = returnCategorySchema.array()

export { createCategorySchema, returnCategorySchema, returnCategoriesSchema, returnCategoriesWithRealStateSchema }