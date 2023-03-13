import { number, z } from 'zod'
import { returnCategorySchema } from './category.schemas'

const addressRequestSchema = z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).nullable().default(null).optional(),
    city: z.string().max(20),
    state: z.string().max(2)
})

const addresReturnSchema = addressRequestSchema.extend({
    id: z.number()
})

const realEstateSchema = z.object({
    sold: z.boolean().optional().default(false),
    value: z.number().or(z.string()).optional().default(0),
    size: z.number().int().positive()
})

const realEstateRequestSchema = realEstateSchema.extend({   
    address: addressRequestSchema,
    categoryId: z.number()
})

const realEstateReturnSchema = realEstateSchema.extend({
    id: z.number(),
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()),
    category: returnCategorySchema,
    address: addresReturnSchema
})

const realEstateWithoutCategorySchema = realEstateReturnSchema.omit({category: true})
                
const realEstateMultipleReturnSchema = realEstateReturnSchema.array()

export { addressRequestSchema, addresReturnSchema, realEstateRequestSchema, realEstateReturnSchema, realEstateMultipleReturnSchema, realEstateWithoutCategorySchema}