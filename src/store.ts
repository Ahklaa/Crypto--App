import { create } from "zustand"
import { devtools } from "zustand/middleware"
import axios from 'axios'
import { CurrenciesCryptoResponseSchema } from "./schema/crypto-schema"
import { CryptoCurrency } from "./types"

type CryptoStore = {
    cryptoCurrencies : CryptoCurrency[],
    fetchCrypto: () => Promise<void>
}
async function getCryptos(){
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
    const {data: {Data}} = await axios.get(url)
    const response = CurrenciesCryptoResponseSchema.safeParse(Data)
    if(response.success){
        return response.data
    }
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