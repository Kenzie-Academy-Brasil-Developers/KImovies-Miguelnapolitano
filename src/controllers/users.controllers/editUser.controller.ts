import { Request, Response } from 'express'
import { iUserWithoutPassword } from '../../interfaces/users.interfaces'
import editUserService from '../../services/users.servivces/editUser.service'

const editUserController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
  
    const user: iUserWithoutPassword = await editUserService(req.user, parseInt(req.params.id), req.body)
  
    return res.json(user)
}

export default editUserController