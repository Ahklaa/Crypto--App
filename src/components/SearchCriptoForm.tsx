import { ChangeEvent, FormEvent, useState } from "react"
import { currencies } from "../db"
import {useCryptoStore} from "../store"
import { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"
export default function SearchCriptoForm() {
    const cryptoCurrencies = useCryptoStore((state)=> state.cryptoCurrencies)
    const fetchData = useCryptoStore((state)=> state.fetchData)
    const [error,setError] = useState("")
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

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(Object.values(pair).includes("")){
            setError("Todos los campos son obligatorios")
            return
        }
        setError("")
        fetchData(pair)
    }
  return (
    <form className="form" onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div className="field">
            <label htmlFor="currency">Modena:</label>
            <select 
            name="currency"
            id="currency"
            onChange={handleChange}
            value={pair.currency}>
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
            onChange={handleChange}
            value={pair.criptocurrency}>
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
