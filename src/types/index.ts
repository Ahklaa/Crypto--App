import { z } from "zod";
import { CurrencySchema, CurrencyCryptoResponseSchema, PairSchema } from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CurrencyCryptoResponseSchema>
export type Pair = z.infer<typeof PairSchema>