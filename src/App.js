import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Home from 'routes/Home'
import Agenda from 'routes/Agenda'
import Comunicados from 'routes/Comunicados'
import Tutoriais from 'routes/Tutoriais'
import Recrutamento from 'routes/Recrutamento'
import Contato from 'routes/Contato'
import Sobre from 'routes/Sobre'
import Content from 'components/Content'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
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
          <Route path='/tutoriais' exact component={Tutoriais} />
          <Route path='/recrutamento' exact component={Recrutamento} />
          <Route path='/contato' exact component={Contato} />
          <Route path='/sobre' exact component={Sobre} />
          <Redirect to='/home' />
        </Content>
      </Router>
    </>
  )
}
