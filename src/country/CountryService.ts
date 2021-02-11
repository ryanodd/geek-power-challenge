import axios from "axios";

export class CountryService {
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
    .catch((error) => {
      console.log("I'm where I want to be")
      console.error(error)
    });
  }
}

export const countryServiceInstance = new CountryService()