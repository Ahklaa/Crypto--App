import { currencies } from "../db"
import {useCryptoStore} from "../store"
export default function SearchCriptoForm() {
    const cryptoCurrencies = useCryptoStore((state)=> state.cryptoCurrencies)
  return (
    <form className="form">
        <div className="field">
            <label htmlFor="currency">Modena:</label>
            <select name="currency" id="currency">
                <option value="">--- Seleccione ---</option>
                {currencies.map(currency => (
                    <option value={currency.code} key={currency.code}>{currency.name}</option>
                ))}
            </select>
        </div>
        <div className="field">
            <label htmlFor="criptocurrency">Cripto:</label>
            <select name="criptocurrency" id="criptocurrency">
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
