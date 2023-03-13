import { z } from 'zod'
import { realEstateWithoutCategorySchema } from './realEstate.schemas'
import { returnUserWithoutPasswordSchema } from './users.schemas'


const createScheduleDataSchema = z.object({
    date: z.date().or(z.string()),
    hour: z.string(),
    realEstateId: z.number()
})

const createScheduleRequestSchema = createScheduleDataSchema.extend({
    userId: z.number()
})

const createScheduleReturnSchema = z.object({
    id: z.number(),
    date:z.string(),
    hour: z.string(),
    userId: z.number(),
    realEstateId: z.number()
})

export { createScheduleDataSchema, createScheduleRequestSchema, createScheduleReturnSchema }