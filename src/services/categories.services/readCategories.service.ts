import { iCategories } from '../../interfaces/categories.interfaces'
import { returnCategoriesSchema } from '../../schemas/category.schemas'
import { categoryRepository } from '../repositories'


const readCategoriesService = async (): Promise<iCategories> => {

    const categories = await categoryRepository.find()

    console.log(categories)

    const allCategories = returnCategoriesSchema.parse(categories)

    return allCategories
}

export default readCategoriesService