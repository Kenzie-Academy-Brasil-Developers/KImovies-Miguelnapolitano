import { RealEstate, Schedule, User } from '../../entities'
import { AppError } from '../../errors'
import { iSchedule, iScheduleData, iScheduleRequest } from '../../interfaces/schedules.interfaces'
import { createScheduleReturnSchema } from '../../schemas/schedules.schemas'
import { realEstateRepository, scheduleRepository, userRepository } from '../repositories'

const createScheduleService = async (
scheduleData: iScheduleData, userId: number
): Promise<iSchedule> => {

    const findUser: User | null = await userRepository.findOneBy({
        id: userId
    })

    if(!findUser){
        throw new AppError('User not found', 409)
    }

    const findRealEstate: RealEstate | null = await realEstateRepository.findOneBy({
        id: scheduleData.realEstateId
    })

    if(!findRealEstate){
        throw new AppError('Real estate not found', 409)
    }

    const creatingSchedule = {
        date: String(scheduleData.date), 
        hour: scheduleData.hour, 
        user: findUser!, 
        realEstate: findRealEstate!
    }

    const newSchedule: Schedule = scheduleRepository.create(creatingSchedule)

    await scheduleRepository.save(newSchedule)

    console.log(newSchedule) 

    return createScheduleReturnSchema.parse({
        id: Number(newSchedule.id),
        date: newSchedule.date,
        hour: newSchedule.hour,
        userId: Number(newSchedule.user.id),
        realEstateId: Number(newSchedule.realEstate.id)
    })

}

export default createScheduleService