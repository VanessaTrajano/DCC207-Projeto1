import Botao from './Botao'
import './Jogo.css'

function Jogo() {

  return (
    <div className="container">
      <h1>Jogo da Memória</h1>
      <div className='sub-container'>
        <div></div> {/* aqui ficarão as cartas */}
        <Botao/>
      </div>
    </div>
  )
}

export default Jogo
