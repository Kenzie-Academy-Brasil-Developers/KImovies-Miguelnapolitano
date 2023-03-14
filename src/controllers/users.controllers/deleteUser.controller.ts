import { Request, Response } from 'express'
import deleteUserService from '../../services/users.servivces/deleteUser.service'


const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {

  await deleteUserService(req.user, Number(req.params.id))

  return res.status(204).json()
} 

export default deleteUserController