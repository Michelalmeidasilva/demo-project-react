import { useRef } from 'react'

const RecrutamentoFormHtml = () => {
  const nicknameRef = useRef()
  const emailRef = useRef()
  const faccaoRef = useRef()
  const pedidoRef = useRef()

  function submitHandler(event) {
    /**
     * Chamar preventDefault durante qualquer fase do fluxo de eventos cancela o evento,
     * o que significa que qualquer ação padrão normalmente feita pela aplicação como um resultado
     * do evento não ocorrerá.
     */
    event.preventDefault()
    const enteredNickname = nicknameRef.current.value
    const enteredEmail = emailRef.current.value
    const enteredFaccao = faccaoRef.current.value
    const enteredPedido = pedidoRef.current.value

    const recrutamentoData = {
      nickname: enteredNickname,
      email: enteredEmail,
      faccao: enteredFaccao,
      pedido: enteredPedido
    }
    console.log(recrutamentoData)
  }

  /**
   * refs acessam the dom elements
   */
  return (
    <div>
      <h2 style={{ margin: '30px' }}>Enviar meu recrutamento</h2>
      <div style={CardStyle}>
        <form onSubmit={submitHandler}>
          <div style={Column}>
            <div>
              <label htmlFor='nickname'>Nickname</label>
              <input style={inputStyle} type='text' required id='nickname' ref={nicknameRef} />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input style={inputStyle} type='email' required id='email' ref={emailRef} />
            </div>
            <div>
              <label htmlFor='faccao'>Facção</label>
              <input style={inputStyle} type='text' required id='faccao' ref={faccaoRef} />
            </div>
            <label htmlFor='pedido'>Por que você quer entrar na guild?</label>
            <textarea style={textAreaStyle} id='pedido' required rows='5' ref={pedidoRef} />
          </div>
          <button style={ButtonStyle}>Submeter meu requerimento</button>
        </form>
      </div>
    </div>
  )
}

const CardStyle = {
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',

  padding: '20px 35px'
}

const Column = {
  display: 'flex',
  flexDirection: 'initial',
  margin: '0px'
}

const ButtonStyle = {
  width: '120px',
  height: '60px'
}
const textAreaStyle = {
  width: '250px',
  height: '100px',
  margin: '10px'
}
const inputStyle = {
  width: '120px',
  height: '30px',
  margin: '5px'
}
export default RecrutamentoFormHtml
