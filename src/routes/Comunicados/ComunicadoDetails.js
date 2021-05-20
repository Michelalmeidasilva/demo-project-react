import React, { useState, useEffect } from 'react'
import { getComunicado } from 'services/comunicados'
import { useLocation, useParams } from 'react-router-dom'
import { getStatusColor } from 'helpers'

// react router dom

const ComunicadoDetails = () => {
  const [comunicado, setComunicado] = useState()
  const location = useLocation()
  const { id } = location.state
  useEffect(() => {
    async function fetchData() {
      const { data } = await getComunicado(id)
      setComunicado(data)
    }
    fetchData()
  }, [])
  return (
    <div>
      <ItemDetail {...comunicado}></ItemDetail>
    </div>
  )
}

const ItemDetail = ({ nome, situacao, recrutador, conteudo, assunto }) => {
  const colorStatus = getStatusColor(situacao)

  return (
    <div>
      <p>Recrutador: {recrutador}</p>
      <p>Assunto:{assunto}</p>
      <div>{conteudo}</div>
      <p style={{ color: colorStatus }}>{situacao}</p>
    </div>
  )
}

export default ComunicadoDetails
