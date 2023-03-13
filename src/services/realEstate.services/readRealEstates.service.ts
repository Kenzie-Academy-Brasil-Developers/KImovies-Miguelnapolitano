import { RealEstate } from '../../entities'
import { iRealEstates } from '../../interfaces/realEstate.interfaces'
import { realEstateMultipleReturnSchema } from '../../schemas/realEstate.schemas'
import { realEstateRepository } from '../repositories'

const readRealEstatesService = async (): Promise<iRealEstates> => {

    const findRealStates: Array<RealEstate> = await realEstateRepository.createQueryBuilder('real_estate')
    .leftJoinAndSelect('real_estate.category', 'category')
    .leftJoinAndSelect('real_estate.address', 'address')
    .getMany()

    const realEstates: iRealEstates = realEstateMultipleReturnSchema.parse(findRealStates)

    return realEstates
}

export default readRealEstatesService