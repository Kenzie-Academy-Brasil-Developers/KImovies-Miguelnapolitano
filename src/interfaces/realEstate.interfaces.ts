import { DeepPartial } from 'typeorm'
import { z } from 'zod'
import { addressRequestSchema, realEstateMultipleReturnSchema, realEstateRequestSchema, realEstateReturnSchema } from '../schemas/realEstate.schemas'

type iRealEstateRequest = z.infer<typeof realEstateRequestSchema>
type iRealEstate = z.infer<typeof realEstateReturnSchema>
type iAddressRequest = DeepPartial<z.infer<typeof addressRequestSchema>> 
type iRealEstates = z.infer<typeof realEstateMultipleReturnSchema>


export { iRealEstateRequest, iRealEstate, iAddressRequest, iRealEstates }