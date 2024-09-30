import "../styles/Hero.css"
import { Link } from 'react-router-dom'

const projeto = [
  {nome: "Dinheiro-Fácil", link: "https://dinheiro-facil.vercel.app/"},
  {nome: "Tempo-Limitado", link: "https://timer.politano.tech"}
]

function Hero() {
  return(
    <>
      <section className="Hero">
        <h1>GABRIEL POLITANO</h1>
        
        <h2><span>Pagina de Trabalho</span> | <Link to="/me">Pagina Pessoal</Link></h2>

        <img className="cartoon"src="/catoon1.jpg" alt=""></img>
      </section>

      <section className="Trabalhos">
        <h2 className="title">DEVELOPER <br/> PROJETOS</h2>

        <div className="projetos">
          <h3>{projeto[0].nome}</h3>
          <a className="center" href={projeto[0].link}>{projeto[0].link}</a>
        </div>
        
      </section>
    </>
  )
}

export default Hero
