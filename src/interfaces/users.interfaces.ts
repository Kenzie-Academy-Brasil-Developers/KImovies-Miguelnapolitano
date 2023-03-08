import { QueryResult } from 'pg'
import { z } from 'zod'
import { createUserSchema, returnUserSchema, returnUserWithoutPasswordSchema } from '../schemas/users.schemas'

type iUserRequest = z.infer<typeof createUserSchema>
type iUser = z.infer<typeof returnUserSchema>
type iUserWithoutPassword = z.infer<typeof returnUserWithoutPasswordSchema>

type iUserResult = QueryResult<iUser>
type iUserResultWithoutPassword = QueryResult<iUserWithoutPassword>

export { iUserRequest, iUser, iUserWithoutPassword, iUserResult, iUserResultWithoutPassword }

