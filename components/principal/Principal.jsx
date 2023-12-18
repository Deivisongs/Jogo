import { useState, useEffect } from 'react'
import Personagens from '../personagens/Personagens'
import Card from '../Card/Card'
import './Principal.css'
import ReactDOMServer from 'react-dom/server';

function Principal() {
  const bd = []
  const [result, setResult] = useState([])
  const [imagem, setImgem] = useState("https://static.vecteezy.com/ti/vetor-gratis/p3/4274186-pessoa-icone-usuario-interface-icone-silhueta-de-homem-simbolo-simples-um-simbolo-glifo-em-seu-site-design-logo-app-ui-webinar-video-chat-ect-vetor.jpg")
  const [escolha, setEscolha] = useState()
  const [poder, setPoder] = useState(0)
  const [energia, setEnergia] = useState(0)

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((dados) => {
        setResult(dados.results)
      })
      .catch((erro) => {
        console.log(erro + " erro na requisição");
      });
  }, []);

  function adicionar() {
    let personagem = {
      id: bd.length,
      name: result[escolha].name,
      especie: result[escolha].species,
      poder: poder,
      energia: energia,
      imagem: result[escolha].image
    }

    bd.push(personagem)

    geraTabela()

  }

  const geraTabela = () => {
    bd.map(x => {
        const componenteJSX = <Card
          name={x.name}
          especie={x.especie}
          poder={x.poder}
          energia={x.energia}
          imagem={x.imagem}
        />
        const htmlString = ReactDOMServer.renderToStaticMarkup(componenteJSX)

  // Suponha que você tenha um elemento com o ID "meuElemento" no seu HTML.
  const listSection = document.getElementById('list-cards');

  if (listSection) {
    listSection.innerHTML += htmlString;
  }
        
  })
  }
  console.log(result)
  return (
    <>
      
      <main>
        <section className='card-section'>
          <h1>Selecionar Personagem</h1>
          <img src={result.length > 0 && escolha !== undefined ? result[escolha].image : imagem} alt="Personagem" />
          <div className="form">
            <select name="personagem" id="personagem" className="selecao" onChange={(e) => {setEscolha(e.target.value)}}>
              <option value="0">Escolha um Personagem...</option>
              {
                result.map(x => {
                  return (
                    <Personagens
                      key={x.id-1}
                      id={x.id-1}
                      name={x.name}
                    />
                  )
                })
              }
            </select>
            <input type="text" name="especie" id="specie" value={result.length > 0 && escolha !== undefined ? result[escolha].species : ''} placeholder='Espécie' disabled/>
            <p>Poder:</p>
            <div className="poder">
              <progress value={poder} max="100" ></progress>
              <input type="number" name="" id="" max={100} min={1} onChange={(e) => {setPoder(e.target.value)}}/>
            </div>
            <p>Energia:</p>
            <div className="poder">
              <progress value={energia} max="100" ></progress>
              <input type="number" name="" id="" max={100} min={1} onChange={(e) => {setEnergia(e.target.value)}}/>
            </div>  
          </div>
          <button onClick={adicionar} className='btn-adiciona'>Cadastrar</button>
        </section>
        <section className='list-cards' id='list-cards'>
          
    
        </section>
        
      </main>

    </>
  )
}

export default Principal