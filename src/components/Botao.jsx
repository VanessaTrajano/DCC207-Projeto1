import './Botao.css'

function recarrega(){
    window.location.reload()
    }

function Botao() {
   
    return (
        <>
            <button className='reset' onClick={recarrega}>Recomeçar Jogo</button>
        </>
    )
}

export default Botao