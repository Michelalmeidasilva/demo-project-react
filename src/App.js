import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import GlobalStyle from './GlobalStyle'
import { Content } from 'components/Content'

import Home from 'routes/Home'
import Agenda from 'routes/Agenda'
import { Comunicados, ComunicadoDetails } from 'routes/Comunicados'
import Tutoriais from 'routes/Tutoriais'
import Recrutamento from 'routes/Recrutamento'
import Contato from 'routes/Contato'
import Sobre from 'routes/Sobre'

const routes = [
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

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Content routes={routes}>
          <Route path='/home' exact component={Home} />
          <Route path='/agenda' exact component={Agenda} />
          <Route path='/comunicados' exact component={Comunicados} />
          <Route exact path='/comunicados/details/' component={ComunicadoDetails} />
          <Route path='/tutoriais' exact component={Tutoriais} params />
          <Route path='/recrutamento' exact component={Recrutamento} />
          <Route path='/contato' exact component={Contato} />
          <Route path='/sobre' exact component={Sobre} />
        </Content>
      </Router>
    </>
  )
}
