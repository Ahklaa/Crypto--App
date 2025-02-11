import { useEffect } from "react"
import SearchCriptoForm from "./components/SearchCriptoForm"
import { useCryptoStore } from "./store"

function App() {
 const fetchCrypto = useCryptoStore((store) => store.fetchCrypto)
 useEffect(()=> {
    fetchCrypto()
 },[])
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <SearchCriptoForm/>
        </div>
      </div>
      
    </>
  )
}

export default App
