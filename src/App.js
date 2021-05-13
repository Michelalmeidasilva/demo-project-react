import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Home from 'routes/Home'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Route path='/home' component={Home} />
        <Redirect to='/home' />
      </Router>
    </div>
  )
}
