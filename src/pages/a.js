import React from 'react'
import queryString from 'query-string'

export default class a extends React.Component {
    render() {
        debugger
        const q = this.props.location.search //http://localhost:3001/a/123?key=value&a=b
        const parsedQuery = queryString.parse(q)
        return <>
            <h1>a, params: {this.props.match.params.text}</h1>
            <h2>query: {q}</h2>
        </>
    }
}