import { Request, Response } from 'express'
import editUserService from '../../services/users.servivces/editUser.service'

const editUserController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
  
    const user = await editUserService(req.user, parseInt(req.params.id), req.body)
  
    return res.json(user)
}

export default editUserController