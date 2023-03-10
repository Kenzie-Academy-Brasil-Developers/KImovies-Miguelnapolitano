import { Request, Response } from 'express'
import { iUserRequest, iUserWithoutPassword } from '../../interfaces/users.interfaces'
import createUserService from '../../services/users.servivces/createUser.service'

const createUserController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const userData: iUserRequest = req.body
  
    const newUser: iUserWithoutPassword = await createUserService(userData)
  
    return res.status(201).json(newUser)
}

export default createUserController