import React from 'react'
/* import Home from './pages_old/home'
import User from './pages_old/user' */
import A from './pages/a'
import B from './pages/b'
import C from './pages/c'
import Header from './header'
import { Switch, Route, Link } from 'react-router-dom'

function App() {
  return <div className='App'>
    <Header />
    <Switch>
      <Route path='/a/:text' component={A} />
      <Route path='/b' component={B} />
      <Route path='/c' component={C} />
    </Switch>
    <Link to='/dfgh'>go to page 'a'</Link>
    {/* <A />
    <B />
    <C /> */}
    {/* <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/user/:id' component={User} />
    </Switch> */}
  </div>
}

export default App
