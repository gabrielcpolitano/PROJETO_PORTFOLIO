import "../styles/Me.css"
import { Link } from 'react-router-dom'

const me = [
  {titulo: "Eu Possando em Pisa", img: "/me1.jpg"},
  {titulo: "Eu Possando em Casa", img: "/me2.jpg"},
  {titulo: "Eu e a Torre", img: "/me3.jpg"},
  {titulo: "Congelando com Estilo no Chile", img: "/me4.jpg"},
  {titulo: "Eu Combatendo o Crime", img: "/me5.jpg"},
  {titulo: "Eu Olhando para Alguma Coisa", img: "/me6.jpg"}
]

function Hero() {
  return(
    <>
      <section className="Hero">
        <h1>GABRIEL POLITANO</h1>
        
        <h2><Link to="/">Pagina de Trabalho</Link> | <span>Pagina Pessoal</span></h2>

        <img className="carttoon" src="/cartoon2.png" alt=""></img>
      </section>
      

     <section className="photos">
        <h2 className="title">Eu na Vida</h2>
        <div className="grid">
            <div className="me">
              <h3>{me[0].titulo}</h3>
              <img className="img-me" src={me[0].img} alt=""/>
            </div>

            <div className="me">
              <h3>{me[1].titulo}</h3>
              <img className="img-me" src={me[1].img} alt=""/>
            </div>
        </div>

          <div className="me meu">
            <h3>{me[2].titulo}</h3>
            <img className="img-me" src={me[2].img} alt=""/>
          </div>

          <div className="grid">
            <div className="me">
              <h3>{me[3].titulo}</h3>
              <img className="img-me" src={me[3].img} alt=""/>
            </div>

            <div className="me">
              <h3>{me[4].titulo}</h3>
              <img className="img-me" src={me[4].img} alt=""/>
            </div>
        </div>

          <div className="me meu">
            <h3>{me[5].titulo}</h3>
            <img className="img-me" src={me[5].img} alt=""/>
          </div>
      </section>
      
      
    </>
  )
}

export default Hero