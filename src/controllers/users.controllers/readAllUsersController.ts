import { Request, Response } from 'express'
import { User } from '../../entities'
import { iUsersReturn } from '../../interfaces/users.interfaces'
import readAllUsersService from '../../services/users.servivces/readAllUsers.service'


const readAllUsersController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
  
    const users: iUsersReturn = await readAllUsersService()
  
    return res.json(users)
}

export default readAllUsersController