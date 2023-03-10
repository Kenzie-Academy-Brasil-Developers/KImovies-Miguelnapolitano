import { Request, Response } from 'express'
import readAllUsersService from '../../services/users.servivces/readAllUsers.service'


const readAllUsersController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
  
    const users = await readAllUsersService()
  
    return res.json(users)
}

export default readAllUsersController