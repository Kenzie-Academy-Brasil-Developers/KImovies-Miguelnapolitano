import { z } from 'zod'
import { createScheduleDataSchema, createScheduleRequestSchema, createScheduleReturnSchema } from '../schemas/schedules.schemas'

type iScheduleData = z.infer<typeof createScheduleDataSchema>
type iScheduleRequest = z.infer<typeof createScheduleRequestSchema>
type iSchedule = z.infer<typeof createScheduleReturnSchema>

export { iScheduleData, iSchedule, iScheduleRequest} 