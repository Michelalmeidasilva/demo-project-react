import React, { useState, useEffect } from 'react'
import { Column, Row } from 'components'
import { Link } from 'react-router-dom'
import { getStatusColor } from 'helpers'

import { getComunicados } from 'services/comunicados'

const Comunicados = () => {
  const [comunicados, setComunicados] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await getComunicados()
      setComunicados(request.data)
    }
    fetchData()
  }, [])

  return <Table>{comunicados}</Table>
}

const Table = ({ children }) => {
  return (
    <div style={tableStyle}>
      <div style={rowStyle}>
        <div style={headStyle}>Recrutador </div>
        <div style={headStyle}>Assunto </div>
        <div style={headStyle}>Resultado</div>
      </div>
      {children.map(child => (
        <ItemRow {...child} />
      ))}
    </div>
  )
}

const ItemRow = ({ id, recrutador, assunto, situacao }) => {
  const colorSituacao = getStatusColor(situacao)
  return (
    <div style={rowStyle}>
      <div style={dataStyle}>{recrutador} </div>
      <Link
        to={{
          pathname: '/comunicados/details',
          state: {
            id: id
          }
        }}
      >
        <div style={dataStyle}>{assunto} </div>
      </Link>
      <div style={(dataStyle, { color: colorSituacao })}>{situacao} </div>
    </div>
  )
}

const tableStyle = {
  width: '100%',
  border: '1px solid $color-form-highlight'
}
const dataStyle = {
  flex: '1 1 20%',
  textAlign: 'center'
}
const headStyle = {
  flex: '1 1 20%',
  display: 'flex',
  width: '100%'
}
const rowStyle = {
  display: 'flex',
  width: '100%'
}

export default Comunicados
