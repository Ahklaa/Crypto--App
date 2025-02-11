import { CurrenciesCryptoResponseSchema } from "../schema/crypto-schema"
import axios from "axios"

export async function getCryptos(){
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
    const {data: {Data}} = await axios.get(url)
    const response = CurrenciesCryptoResponseSchema.safeParse(Data)
    if(response.success){
        return response.data
    }
}