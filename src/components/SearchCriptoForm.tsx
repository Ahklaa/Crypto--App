import { currencies } from "../db"
export default function SearchCriptoForm() {
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
            </select>
        </div>
        <input type="submit" value="Cotizar" />
    </form>
  )
}
