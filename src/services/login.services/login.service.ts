import { compare } from 'bcryptjs'
import { User } from '../../entities'
import { AppError } from '../../errors'
import { iLoginRequest } from '../../interfaces/login.interfaces'
import { userRepository } from '../repositories'
import jwt from 'jsonwebtoken'

const loginService = async (
    loginData: iLoginRequest
  ): Promise<string> => {

    const user: User | null = await userRepository.findOneBy({
        email: loginData.email
    })

    if(!user){
        throw new AppError('Invalid credentials', 401)
    }

    const passwordMatch = await compare(loginData.password, user.password)

    if(!passwordMatch){
        throw new AppError('Invalid credentials', 401)
    }

    console.log(user)

    const token: string = jwt.sign(
        {
            admin: user.admin
        },
            process.env.SECRET_KEY!,
        {
            expiresIn: process.env.EXPIRES_IN!,
            subject: String(user.id)
        }
    )

    return token
}

  export default loginService