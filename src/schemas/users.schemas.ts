import { z } from 'zod'

const createUserSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().min(3).max(45),
    password: z.string(),
    admin: z.boolean().default(false)
})

const returnUserSchema = createUserSchema.extend({
    id: z.number(),
    createdAt: z.string(),
    deletedAt: z.string().nullable(),
    updatedAt: z.string()
})
  
const returnUserWithoutPasswordSchema = returnUserSchema.omit({ password: true })

const retunrMultipleUsersSchema = returnUserWithoutPasswordSchema.array()

const editUserSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().min(3).max(45),
    password: z.string()
}).partial()

export { createUserSchema, returnUserSchema, returnUserWithoutPasswordSchema, retunrMultipleUsersSchema,editUserSchema }