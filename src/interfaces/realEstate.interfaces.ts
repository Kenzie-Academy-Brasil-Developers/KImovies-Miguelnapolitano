import { z } from 'zod'
import { AddressRequestSchema, realEstateMultipleReturnSchema, realEstateRequestSchema, realEstateReturnSchema } from '../schemas/realEstate.schemas'

type iRealEstateRequest = z.infer<typeof realEstateRequestSchema>
type iRealEstate = z.infer<typeof realEstateReturnSchema>
type iAddressRequest = z.infer<typeof AddressRequestSchema>
type iRealEstates = z.infer<typeof realEstateMultipleReturnSchema>

export { iRealEstateRequest, iRealEstate, iAddressRequest, iRealEstates }