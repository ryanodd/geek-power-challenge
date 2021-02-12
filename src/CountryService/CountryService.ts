import axios from "axios";
import Vue from 'vue'
import { FetchCountriesResponse } from "./model/api";
import { Country } from "./model/country";

import mockJson from './sample-fetch-response.json'

export class CountryService {
	
  countryDict: { [id: string]: Country } = {};

	getCountries(): Country[] {
		return Object.keys(this.countryDict).map(id => {
			return this.countryDict[id];
		});
	}

  fetchCountries(): Promise<string>{
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        axios.post("/API/getCountries")
        .then(() => {
          // If this were real, we would use Vue.set here instead
          reject("The request somehow worked?!")
        })
        .catch(() => {
          const mockResponse: FetchCountriesResponse = mockJson
          if (mockResponse.success){
            const newCountryDict: { [id: string]: Country } = {}
            
            mockResponse.countries.forEach(country => {
              newCountryDict[country.id.toString()] = {  
                id: country.id.toString(),
                name: country.country,
                countryCode: country.countryCode
              }
            })
            // Use Vue.set to make UI reactive to this change
            Vue.set(this, 'countryDict', newCountryDict)
            resolve("Success!")
          }
          else{
            reject("Boooooo!")
          }
        })
      }, 1400)
    })
  }

  deleteCountry(id: string){
    Vue.delete(this.countryDict, id)
  }
}

export const countryServiceInstance = new CountryService()