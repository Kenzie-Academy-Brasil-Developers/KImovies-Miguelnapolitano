import { z } from 'zod'
import { returnCategorySchema } from './category.schemas'

const AddressRequestSchema = z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).optional().nullable().default(null),
    city: z.string().max(20),
    state: z.string().max(2)
})

const realEstateRequestSchema = z.object({
    sold: z.boolean().optional().default(false),
    value: z.number().optional().default(0),
    size: z.number().int(),
    category: z.number(),
    address: AddressRequestSchema
})

const realEstateReturnSchema = realEstateRequestSchema.extend({
    id: z.number(),
    createdAt: z.string(),
    deletedAt: z.string().nullable(),
    updatedAt: z.string(),
    category: returnCategorySchema
})

const realEstateMultipleReturnSchema = realEstateReturnSchema.array()

export { AddressRequestSchema, realEstateRequestSchema, realEstateReturnSchema, realEstateMultipleReturnSchema }