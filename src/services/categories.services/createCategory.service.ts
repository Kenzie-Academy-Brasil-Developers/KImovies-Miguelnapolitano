import { Category } from '../../entities'
import { AppError } from '../../errors'
import { iCategory, iCategoryRequest } from '../../interfaces/categories.interfaces'
import { returnCategorySchema } from '../../schemas/category.schemas'
import { categoryRepository } from '../repositories'


const createCategoryService = async (catData: iCategoryRequest) => {

    const findCat = await categoryRepository.findOneBy({
        name: catData.name
    })

    if (findCat){
        throw new AppError('Category already exists', 409)
    }

    const category: Category = categoryRepository.create(catData)

    await categoryRepository.save(category)

    const newCategory: iCategory = returnCategorySchema.parse(category)

    return newCategory
}

export default createCategoryService