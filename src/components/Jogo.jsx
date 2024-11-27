import Botao from './Botao'
import Cards from './Cards'
import './Jogo.css'

function Jogo() {

  return (
    <div className="container">
      <h1>Jogo da Memória</h1>
      <div>
        <Cards/>
      </div>
      <Botao/>
    </div>
  )
}

export default Jogo
