import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from 'routes/Home'
export default function App() {
  return (
    <Router>
      <Route path='/home' component={Home} />
      <Redirect to='/home' />
    </Router>
  )
}
