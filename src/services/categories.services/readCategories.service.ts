import { Category } from '../../entities'
import { iCategories } from '../../interfaces/categories.interfaces'
import { categoryRepository } from '../repositories'

const readCategoriesService = async (): Promise<iCategories> => {

    const categories: Array<Category> = await categoryRepository.find()

    return categories
}

export default readCategoriesService