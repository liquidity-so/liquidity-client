import config from "../config";

export default class LiquidityService {
    BASE_URL = config.API_BASE_URL;

    async autoFill(input) {
        const url = `${this.BASE_URL}/api/autofill/suggest?query=${input}`;
        const autoFillData = fetch(url)
            .then((res) => {
              if (!res.ok) {
                console.log(res.status);
                return null
              }
              return res.json();
         })
         return autoFillData;
    }
    async simulateExchange(coin1, coin2, volume, type, auth) {
        const url = `${this.autoFillBASE_URL}/api/simulate?coin1=${coin1}&coin2=${coin2}&volume=${volume}&order_type=${type}`;
        const exchangeData = fetch(url)
                .then((res) => {
                if (!res.ok) {
                    console.log(res.status);
                    return null
                }
                return res.json();
            })
            return exchangeData;
    }
    // USER ENDPOINTS
    async createNewUser(newUser = {username: String, email: String, password: String}){
        const url = `${this.BASE_URL}/register/`;
        return fetch(url, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then((res) => {
            if (!res.ok) {
                console.log(res.status);
                return null
            }
            return res.json();
        });
    }
}
