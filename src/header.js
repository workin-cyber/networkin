import React, { Component } from 'react'
import logo from './images/logo.png'
import { NavLink } from 'react-router-dom'

export default class extends Component {
    render() {
        return <header className='box'>
            <img className='logo' src={logo} alt='logo netWorkin' />
           {/*  <nav>
                <NavLink activeClassName='activeLink' exact to='/'>בית</NavLink>
                <NavLink activeClassName='activeLink' to='/about'>אודות</NavLink>
                <NavLink activeClassName='activeLink' to='/users'>משתמשים</NavLink>
            </nav> */}
        </header>
    }
}