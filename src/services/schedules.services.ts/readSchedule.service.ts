import { realEstateRepository, scheduleRepository } from "../repositories"


const readScheduleService = async (id: number): Promise<object> => {

    const findSchedule = await realEstateRepository.createQueryBuilder("real_state")
    .where("real_state.id = :id", {id: id})
    .leftJoinAndSelect("real_state.address", "address")
    .leftJoinAndSelect("real_state.category", "category")
    .leftJoinAndSelect("real_state.schedules", "schedules")
    .leftJoinAndSelect("schedules.user", "user")
    .getOne()

    return findSchedule!
}

export default readScheduleService