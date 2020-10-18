export default class LiquidityService {
    async findClosestMatches(input) {
        // placeholder data
        console.log(input)
        return [
            {
                ticker: "BTC",
                name: "Bitcoin"
            },
            {
                ticker: "BAT",
                name: "Basic Attention Token"
            },
            {
                ticker: "ADA",
                name: "Cardano"
            },
            {
                ticker: "XLM",
                name: "Stellar Lumens"
            },
        ]
    }
    async getExchangeData(pair1, pair2, volume, type, auth) {
        // make request here
        // If not logged in, should return limited dataset
        return {
                "summary": {
                    "pair1": "BAT",
                    "pair2": "BTC",
                    "price": "0.1655",
                    "change": "5.32",
                    "type": "Buy",
                    "size": "100000",
                    // replace with UTC/UNIX timestamp
                    "time": "01:33:21",
                },
                "results": [
                    {
                        "name": "coinbase",
                        "img": "",
                        "pi": 95,
                        "bps": 10,
                        "cost": 380,
                        "wap": 0.1752,
                        "total": 33380
                    },
                    {
                        "name": "binance",
                        "img": "",
                        "pi": 2,
                        "bps": 13,
                        "cost": 2320,
                        "wap": 0.1667,
                        "total": 33380
                    }
                ]
            }
    }
}

