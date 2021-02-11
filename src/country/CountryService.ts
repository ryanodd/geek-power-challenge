import axios from "axios";
import Vue from 'vue'
import { FetchCountriesResponse } from "./model/api";
import { Country } from "./model/country";

import mockJson from './sample-fetch-response.json'

export class CountryService {
	
  countries: Country[] = []

  fetchCountries(): Promise<string>{
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        axios.post("/API/getCountries")
        .then(() => {
          reject("The request somehow worked?!")
        })
        .catch(() => {
          const mockResponse: FetchCountriesResponse = mockJson
          if (mockResponse.success){
            // Use Vue.set to make UI reactive to this change
            Vue.set(this, 'countries', mockResponse.countries.map(country => {
              return {
                id: country.id.toString(),
                name: country.country,
                countryCode: country.countryCode
              }
            }))
            resolve("Success!")
          }
          else{
            reject("Boooooo!")
          }
        })
      }, 1600)
    })
  }
}

export const countryServiceInstance = new CountryService()