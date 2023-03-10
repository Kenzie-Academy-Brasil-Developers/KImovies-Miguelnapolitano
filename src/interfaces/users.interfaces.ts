import { QueryResult } from 'pg'
import { DeepPartial } from 'typeorm'
import { z } from 'zod'
import { User } from '../entities'
import { createUserSchema, retunrMultipleUsersSchema, returnUserSchema, returnUserWithoutPasswordSchema } from '../schemas/users.schemas'

type iUserRequest = z.infer<typeof createUserSchema>
type iUser = z.infer<typeof returnUserSchema>
type iUserWithoutPassword = z.infer<typeof returnUserWithoutPasswordSchema>

type iUserResult = QueryResult<iUser>
type iUserResultWithoutPassword = QueryResult<iUserWithoutPassword>

type iUsersReturn = z.infer<typeof retunrMultipleUsersSchema>

type iEditUser = DeepPartial<User>

interface iReqUser{
    id: number,
    isAdmin: boolean | string
}

export { iUserRequest, iUser, iUserWithoutPassword, iUserResult, iUserResultWithoutPassword, iUsersReturn, iEditUser, iReqUser }

