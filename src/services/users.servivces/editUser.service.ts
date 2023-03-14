import { User } from '../../entities'
import { AppError } from '../../errors'
import { iEditUser, iUserWithoutPassword } from '../../interfaces/users.interfaces'
import { returnUserWithoutPasswordSchema } from '../../schemas/users.schemas'
import { userRepository } from '../repositories'

const editUserService = async (reqUser: any, id: number, editData: iEditUser): Promise<iUserWithoutPassword> => {

    if (reqUser.id != id && reqUser.isAdmin == false) {
        throw new AppError("Insufficient permission", 403)
    }

    const currentUser: User | null = await userRepository.findOneBy({
        id: id
    })
    
    const newUser: User = userRepository.create({
        ...currentUser,
        ...editData
    })

    await userRepository.save(newUser)

    const editedUser: iUserWithoutPassword = returnUserWithoutPasswordSchema.parse(newUser)

    return editedUser
}

export default editUserService