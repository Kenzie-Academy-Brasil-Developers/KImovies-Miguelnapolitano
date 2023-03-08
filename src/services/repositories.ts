import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { user } from '../entities'

const userRepository: Repository<user> = AppDataSource.getRepository(user)

export { userRepository }
