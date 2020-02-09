import React from 'react'
import Home from './pages/home'
import User from './pages/user'
import Header from './header'
import { Switch, Route } from 'react-router-dom'

function App() {
  return <div className='App'>
    <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/user/:id' component={User} />
    </Switch>
  </div>
}

export default App
