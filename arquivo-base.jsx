import { useState } from 'react'
import './App.css'

function App() {
  const [saldo, setSaldo] = useState(0)
  const [valor, setValor] = useState(0)

  function adiciona() {
    
    
    
    if (valor == 0 ) {
      alert("Digite um valor valido");
     
    } else {
      setSaldo(parseFloat(valor)+parseFloat(saldo))
    }

    //setSaldo(saldo += valor) 

  }
  function retira() {
    
    setValor(parseFloat(valor))
    setSaldo(parseFloat(saldo))

    if (valor <= 0) {
      alert("Digite um valor Válido.")
    } else if (valor > saldo) {
      alert("Você não possui saldo suficiente.")
    } else {
      setSaldo(saldo - valor)
    }
  }

  return (
    <>
      <main>
        <div className="saldo">
          <h1 className='sifrao'>R$</h1>
          <h1 className="vlrSaldo">{saldo.toFixed(2)}</h1>
        </div>
        <div className="inputUser">
          <input type="text" name="insere" id="insere" className='insere' onChange={(e)=>setValor(e.target.value)} placeholder='0.00'/>
        </div>
        <div className="buttons">
          <button onClick={adiciona}>
            <span className="material-symbols-outlined">data_saver_on</span>
            <p>Adicionar</p>
          </button>
          <button onClick={retira}>
            <span className="material-symbols-outlined">unknown_5</span>
            <p>Retirar</p>
          </button>
        </div>
      </main>
    </>
  )
}

export default App
