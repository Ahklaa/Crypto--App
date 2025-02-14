import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { CryptoCurrency,CryptoPrice,Pair } from "./types"
import { fetchCryptoCurrentPrice, getCryptos } from "./service/CryptoServices"

type CryptoStore = {
    cryptoCurrencies : CryptoCurrency[],
    result : CryptoPrice
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
    fetchCrypto : async() => {
        const cryptoCurrencies = await getCryptos()
        set(()=> ({
            cryptoCurrencies
        }))
    },
    fetchData : async( pair) => {
       const result = await fetchCryptoCurrentPrice(pair)
       set(()=> ({
            result
       }))
       
    }
})
))