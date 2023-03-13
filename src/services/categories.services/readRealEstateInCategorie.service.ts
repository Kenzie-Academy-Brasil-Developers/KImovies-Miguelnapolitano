import { categoryRepository } from '../repositories'

const readRealEstateInCategorieService = async (id: number): Promise<object> => {

    const category = await categoryRepository.createQueryBuilder("categories")
    .where("categories.id = :id", {id: id})
    .leftJoinAndSelect("categories.realEstate", "realEstate")
    .getOne()

    return category!
}

export default readRealEstateInCategorieService