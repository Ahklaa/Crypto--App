import { CryptoPriceSchema, CurrenciesCryptoResponseSchema } from "../schema/crypto-schema"
import axios from "axios"
import { Pair } from "../types"

export async function getCryptos(){
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
    const {data: {Data}} = await axios.get(url)
    const response = CurrenciesCryptoResponseSchema.safeParse(Data)
    if(response.success){
        return response.data
    }
}

export async function fetchCryptoCurrentPrice(pair : Pair){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
    const {data : {DISPLAY}} =  await axios.get(url)
    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])
    if(result.success){
        return result.data
    }
    
}   