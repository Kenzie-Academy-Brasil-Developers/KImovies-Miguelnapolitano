import { iCategoriesWithRealEstate } from '../../interfaces/categories.interfaces'
import { categoryRepository } from '../repositories'

const readRealEstateInCategorieService = async (id: number): Promise<iCategoriesWithRealEstate> => {

    const category: iCategoriesWithRealEstate | null = await categoryRepository.createQueryBuilder("categories")
    .where("categories.id = :id", {id: id})
    .leftJoinAndSelect("categories.realEstate", "realEstate")
    .getOne()

    return category!
}

export default readRealEstateInCategorieService