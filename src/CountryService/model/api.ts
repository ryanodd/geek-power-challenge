import { Country } from './country'

export interface FetchCountriesResponse {
  countries: {
    id: number
    country: string
    countryCode: string
  }[]
  success: boolean
}