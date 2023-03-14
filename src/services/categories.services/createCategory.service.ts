import { Category } from '../../entities'
import { AppError } from '../../errors'
import { iCategoryRequest } from '../../interfaces/categories.interfaces'
import { categoryRepository } from '../repositories'

const createCategoryService = async (catData: iCategoryRequest) => {

    const findCat: Category | null = await categoryRepository.findOneBy({
        name: catData.name
    })

    if (findCat){
        throw new AppError('Category already exists', 409)
    }

    const category: Category = categoryRepository.create(catData)

    await categoryRepository.save(category)

    return category
}

export default createCategoryService