import { RealEstate, Schedule, User } from '../../entities'
import { AppError } from '../../errors'
import { iScheduleData } from '../../interfaces/schedules.interfaces'
import { realEstateRepository, scheduleRepository, userRepository } from '../repositories'

const createScheduleService = async (
scheduleData: iScheduleData, userId: number
) => {

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
        throw new AppError('RealEstate not found', 404)
    }

    const creatingSchedule = {
        date: String(scheduleData.date), 
        hour: scheduleData.hour, 
        user: findUser!, 
        realEstate: findRealEstate!
    }

    const newSchedule: Schedule = scheduleRepository.create(creatingSchedule)

    await scheduleRepository.save(newSchedule)

}

export default createScheduleService