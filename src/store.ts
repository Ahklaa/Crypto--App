import { create } from "zustand"
import axios from 'axios'
import { CurrenciesCryptoResponseSchema } from "./schema/crypto-schema"
async function getCryptos(){
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
    const {data: {Data}} = await axios.get(url)
    const response = CurrenciesCryptoResponseSchema.safeParse(Data)
    console.log(response);
    
}
export const useCryptoStore = create(() => ({
    fetchCrypto : () => {
        getCryptos()
    }
}))