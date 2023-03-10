import { User } from '../../entities'
import { AppError } from '../../errors'
import { iReqUser } from '../../interfaces/users.interfaces'
import { userRepository } from '../repositories'

const deleteUserService = async (reqUser: iReqUser, id: number) => {

    if (reqUser.id != id && reqUser.isAdmin == false) {
        throw new AppError("Insufficient permission", 403)
    }

    const user: User | null = await userRepository.findOneBy({
        id: id
    })

    await userRepository.softRemove(user!)

}

export default deleteUserService