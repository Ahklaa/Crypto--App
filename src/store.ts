import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { CryptoCurrency } from "./types"
import { getCryptos } from "./service/CryptoServices"

type CryptoStore = {
    cryptoCurrencies : CryptoCurrency[],
    fetchCrypto: () => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptoCurrencies : [],
    fetchCrypto : async() => {
        const cryptoCurrencies = await getCryptos()
        set(()=> ({
            cryptoCurrencies
        }))
        
    }
})
))