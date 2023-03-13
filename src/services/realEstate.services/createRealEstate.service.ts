import { Address, Category, RealEstate } from '../../entities'
import { AppError } from '../../errors'
import { iRealEstate, iRealEstateRequest } from '../../interfaces/realEstate.interfaces'
import { addresReturnSchema, realEstateReturnSchema } from '../../schemas/realEstate.schemas'
import { addressRepository, categoryRepository, realEstateRepository } from '../repositories'

const createRealEstateService = async (realEstateData: iRealEstateRequest): Promise<iRealEstate> => {

    const findAddress: Address | null = await addressRepository.findOneBy({
            street: realEstateData.address.street,
            number: realEstateData.address.number!,
            city: realEstateData.address.city,
            state: realEstateData.address.state,   
    })

    if(findAddress){
        throw new AppError('Address alredy exists', 409)
    }

    const address: Address = addressRepository.create(realEstateData.address)

    await addressRepository.save(address)

    const newAddress = addresReturnSchema.parse(address)

    const findCategory: Category | null = await categoryRepository.findOneBy({
        name: realEstateData.categoryToCreate!.name
    })

    const realEstate: RealEstate = realEstateRepository.create({
        sold: realEstateData.sold,
        value: realEstateData.value,
        size: realEstateData.size,
        category: findCategory!,
        address: newAddress
    })

    await realEstateRepository.save(realEstate)

    const newRealEstate: iRealEstate = realEstateReturnSchema.parse(realEstate)

    return newRealEstate
}

export default createRealEstateService