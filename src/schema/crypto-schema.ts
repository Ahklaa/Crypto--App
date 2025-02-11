import {z} from 'zod'

export const CurrencySchema = z.object({
    code : z.string(),
    name : z.string()
})

export const CurrencyCryptoResponseSchema = z.object({
    CoinInfo : z.object({
        FullName : z.string(),
        Name : z.string()
    })
})

export const CurrenciesCryptoResponseSchema = z.array(CurrencyCryptoResponseSchema)
export const PairSchema = z.object({
    currency : z.string(),
    criptocurrency : z.string()
})