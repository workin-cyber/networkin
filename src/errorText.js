import React, { Component } from 'react'

export default class extends Component {
    render() {
        
        return <div className='errorText'>{this.props.children}</div>
    }
}