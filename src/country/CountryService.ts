import axios from "axios";
import Vue from 'vue'
import { FetchCountriesResponse } from "./model/api";
import { Country } from "./model/country";

import mockJson from './sample-fetch-response.json'

export class CountryService {
	
  countries: Country[] = []
  
  constructor() {
    console.log('initin')
	}

  fetchCountries(){
    console.log('fetchin!!!!!!!!!!')
    axios.post("/API/getCountries")
    .then((res) => {
      console.log(`statusCode: ${res}`)
      console.log(res)
    })
    .catch(() => {
      const mockResponse: FetchCountriesResponse = mockJson
      if (mockResponse.success){
        mockResponse.countries.forEach(country => {
          Vue.set(this.countries, this.countries.length, {
            id: country.id.toString(),
            name: country.country,
            countryCode: country.countryCode
          })
        })
      }
      else{
        console.log("Error")
      }
    })
  }
}

export const countryServiceInstance = new CountryService()