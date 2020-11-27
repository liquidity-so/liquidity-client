import config from "../config";

export default class LiquidityService {
    async autoFill(input) {
        const url = `${config.API_BASE_URL}/api/autofill/suggest?query=${input}`;
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
        const url = `${config.API_BASE_URL}/api/simulate?coin1=${coin1}&coin2=${coin2}&volume=${volume}&order_type=${type}`;
        console.log(url);
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
}
