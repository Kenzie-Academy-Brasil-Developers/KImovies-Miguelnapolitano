import { z } from 'zod'

const createScheduleDataSchema = z.object({
    date: z.string(),
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