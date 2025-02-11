import { ChangeEvent, useState } from "react"
import { currencies } from "../db"
import {useCryptoStore} from "../store"
import { Pair } from "../types"
export default function SearchCriptoForm() {
    const cryptoCurrencies = useCryptoStore((state)=> state.cryptoCurrencies)

    const [pair, setPair ] = useState<Pair>({
        currency : "",
        criptocurrency : ""
    })
    const handleChange = (e : ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name] : e.target.value
        })
    }
  return (
    <form className="form">
        <div className="field">
            <label htmlFor="currency">Modena:</label>
            <select 
            name="currency"
            id="currency"
            onChange={handleChange}>
                <option value="">--- Seleccione ---</option>
                {currencies.map(currency => (
                    <option value={currency.code} key={currency.code}>{currency.name}</option>
                ))}
            </select>
        </div>
        <div className="field">
            <label htmlFor="criptocurrency">Cripto:</label>
            <select 
            name="criptocurrency" 
            id="criptocurrency" 
            onChange={handleChange}>
                <option value="">--- Seleccione ---</option>
                {cryptoCurrencies.map(currency => (
                     <option value={currency.CoinInfo.Name} key={currency.CoinInfo.Name}>{currency.CoinInfo.FullName}</option>
                ))}
            </select>
        </div>
        <input type="submit" value="Cotizar" />
    </form>
  )
}
