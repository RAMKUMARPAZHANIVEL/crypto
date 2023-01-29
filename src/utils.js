import axios from "axios";

const CryptoURL = axios.create({
    baseURL: 'https://coinranking1.p.rapidapi.com/coins',
    timeout: 15000,
    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h',
            'tiers[0]': '1',
            orderBy: 'marketCap',
            orderDirection: 'desc',
            limit: '50',
            offset: '0'
    },
    headers: {
        'X-RapidAPI-Key': '4aaf453cd5msh1db557a5a8ccdddp1c7e70jsnb5c37c40bbfd',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
})

export {CryptoURL};