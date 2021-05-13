import React from 'react'

const ButtonComponent = ({ onClick, ...props }) => (
  <button
    onClick={onClick}
    title='Learn More'
    accessibilityLabel='Learn more about this purple button'
    style={buttonStyle}
  >
    {' '}
    Cliqe aqui
  </button>
)

const buttonStyle = {
  backgroundColor: 'red',
  color: 'white',
  width: '50px',
  height: '80px',
  padding: '10px',
  fontFamily: 'Arial',
  textAlign: 'center'
}

export default ButtonComponent
