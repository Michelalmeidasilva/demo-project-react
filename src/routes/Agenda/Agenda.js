import React, { useState, useEffect } from 'react'
import { getAgenda } from 'services/agenda'
import { formatDateFromAPI } from 'helpers/'
const Agenda = () => {
  const [agenda, setAgenda] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAgenda()
      setAgenda(data)
    }
    fetchData()
    console.log(agenda)
  }, [])

  return <Calendar>{agenda}</Calendar>
}

const Calendar = ({ children }) => {
  return (
    <div>
      {children.map(child => (
        <ItemCalendar {...child}></ItemCalendar>
      ))}
    </div>
  )
}
const ItemCalendar = ({ data, participantes, categoria, titulo }) => {
  return (
    <p>
      Data: {formatDateFromAPI(data)}, Raid: {titulo}
      <p>Categoria:{categoria}</p>
      <p>Participantes:</p>
      {participantes.map(participante => (
        <li>{participante}</li>
      ))}
    </p>
  )
}

export default Agenda
