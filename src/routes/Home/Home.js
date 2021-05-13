import React from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'

import SideBar from 'components/SideBar'

import Agenda from 'routes/Agenda'
import Comunicados from 'routes/Comunicados'
import Tutoriais from 'routes/Tutoriais'
import Recrutamento from 'routes/Recrutamento'
import Contato from 'routes/Contato'
import Sobre from 'routes/Sobre'

export const Rotas = [
  {
    title: 'Agenda',
    path: '/agenda'
  },
  {
    title: 'Comunicados',
    path: '/comunicados'
  },
  {
    title: 'Tutoriais',
    path: '/tutoriais'
  },
  {
    title: 'Recrutamento',
    path: '/recrutamento'
  },
  {
    title: 'Contato',
    path: '/contato'
  },
  {
    title: 'Sobre',
    path: '/sobre'
  }
]

const Home = () => {
  return (
    <Switch>
      <SideBar rotas={Rotas} />
      <Route path='/agenda' component={Agenda} />
      <Route path='/comunicados' component={Comunicados} />
      <Route path='/tutoriais' component={Tutoriais} />
      <Route path='/recrutamento' component={Recrutamento} />
      <Route path='/contato' component={Contato} />
      <Route path='/sobre' component={Sobre} />
    </Switch>
  )
}

export default Home
