import { iRealEstates } from '../../interfaces/realEstate.interfaces'
import { realEstateRepository } from '../repositories'

const readRealEstatesService = async (): Promise<iRealEstates> => {

    const findRealStates: iRealEstates = await realEstateRepository.createQueryBuilder('real_estate')
    .leftJoinAndSelect('real_estate.address', 'address')
    .getMany()

    return findRealStates
}

export default readRealEstatesService