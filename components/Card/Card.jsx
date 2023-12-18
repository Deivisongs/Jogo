import '../Card/StyleCard.css'

function Card({name, especie, poder, energia, imagem}) {
    return (
        <div className="cardContainer">
            <div>
                <h1>{name}</h1>
                <p className='pesonEspecie'><strong>Especie:</strong> {especie}</p>
                <p className='personPoder'><strong>Poder:</strong> {poder}</p>
                <p className='personEnergia'><strong>Energia:</strong> {energia}</p>
            </div>
            <div className='divImg'>
                <img src={imagem} alt="" className="imgPerson" />
            </div>
            
        </div>
    )
}

export default Card