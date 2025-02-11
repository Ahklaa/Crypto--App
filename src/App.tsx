import SearchCriptoForm from "./components/SearchCriptoForm"

function App() {

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
