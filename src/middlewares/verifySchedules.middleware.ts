import { NextFunction, Request, Response } from 'express'
import { Schedule } from '../entities'
import { AppError } from '../errors'
import { scheduleRepository } from '../services/repositories'

const verifySchedulesMiddleware = async (req:Request, res:Response, next: NextFunction): Promise<void> => {

    const findScheduleforUser: Schedule | null = await scheduleRepository.createQueryBuilder('schedule')
    .where('schedule.user.id = :userId', {userId: req.user.id})
    .andWhere('schedule.date = :date', {date: req.body.date})
    .andWhere('schedule.hour = :hour', {hour: req.body.hour})
    .getOne()

    if(findScheduleforUser){
        throw new AppError('User schedule to this real estate at this date and time already exists', 409)
    }

    const findScheduleforRealEstate: Schedule | null = await scheduleRepository.createQueryBuilder('schedule')
    .where('schedule.realEstate.id = :realEstateId', {realEstateId: req.body.realEstateId})
    .andWhere('schedule.date = :date', {date: req.body.date})
    .andWhere('schedule.hour = :hour', {hour: req.body.hour})
    .getOne()

    if(findScheduleforRealEstate){
        throw new AppError('Schedule to this real estate at this date and time already exists', 409)
    }
   
    next()
}

export default verifySchedulesMiddleware