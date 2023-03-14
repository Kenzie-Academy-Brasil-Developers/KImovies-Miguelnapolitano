import { User } from '../../entities'
import { iUsersReturn } from '../../interfaces/users.interfaces'
import { retunrMultipleUsersSchema } from '../../schemas/users.schemas'
import { userRepository } from '../repositories'


const readAllUsersService = async ():Promise<iUsersReturn> => {

    const findUsers: Array<User> = await userRepository.find()

    const users: iUsersReturn = retunrMultipleUsersSchema.parse(findUsers)

    return users
}

export default readAllUsersService