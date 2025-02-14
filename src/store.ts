import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { CryptoCurrency,CryptoPrice,Pair } from "./types"
import { fetchCryptoCurrentPrice, getCryptos } from "./service/CryptoServices"

type CryptoStore = {
    cryptoCurrencies : CryptoCurrency[],
    result : CryptoPrice,
    loading : Boolean
    fetchCrypto: () => Promise<void>,
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptoCurrencies : [],
    result : {
        PRICE: "",
        LOWDAY: "",
        HIGHDAY: "",
        IMAGEURL: "",
        LASTUPDATE: "",
        CHANGEPCT24HOUR: ""
    },
    loading : false,
    fetchCrypto : async() => {
        const cryptoCurrencies = await getCryptos()
        set(()=> ({
            cryptoCurrencies
        }))
    },
    fetchData : async( pair) => {
        set(()=> ({
            loading: true
       }))
       const result = await fetchCryptoCurrentPrice(pair)
       set(()=> ({
            result,
            loading: false
       }))
       
    }
})
))