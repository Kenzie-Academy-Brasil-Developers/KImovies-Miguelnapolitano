import {
  iUserRequest,
  iUserWithoutPassword,
} from '../../interfaces/users.interfaces'
import { userRepository } from '../repositories'
import { User } from '../../entities'
import { returnUserWithoutPasswordSchema } from '../../schemas/users.schemas'

const createUserService = async (
  userData: iUserRequest
): Promise<iUserWithoutPassword> => {

  const user: User = userRepository.create(userData)

  await userRepository.save(user)

  const newUser: iUserWithoutPassword =
    returnUserWithoutPasswordSchema.parse(user)

  return newUser
}

export default createUserService
