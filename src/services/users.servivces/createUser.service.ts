import {
  iUserRequest,
  iUserWithoutPassword,
} from '../../interfaces/users.interfaces'
import { userRepository } from '../repositories'
import { user } from '../../entities'
import { returnUserWithoutPasswordSchema } from '../../schemas/users.schemas'

const createUserService = async (
  userData: iUserRequest
): Promise<iUserWithoutPassword> => {

  const user: user = userRepository.create(userData)

  await userRepository.save(user)

  const newUser: iUserWithoutPassword =
    returnUserWithoutPasswordSchema.parse(user)

  return newUser
}

export { createUserService }
