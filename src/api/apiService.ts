import axios from 'axios'

export default class ApiService {

    getCountries() {
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