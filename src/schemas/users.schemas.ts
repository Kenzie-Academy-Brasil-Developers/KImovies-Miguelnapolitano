import { z } from 'zod'
import { hashSync } from 'bcryptjs'

const createUserSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().min(3).max(45),
    password: z.string().transform((password) => hashSync(password, 10)),
    admin: z.boolean().optional()
})

const returnUserSchema = createUserSchema.extend({
    id: z.number()})
  
const returnUserWithoutPasswordSchema = returnUserSchema.omit({ password: true })

export { createUserSchema, returnUserSchema, returnUserWithoutPasswordSchema }