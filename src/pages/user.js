import React from 'react'
import axios from 'axios'
import Loader from '../loader'
import ErrorText from '../errorText'

export default class User extends React.Component {
    constructor() {
        super()
        this.state = {
            user: null,
            loading: true,
            error: null
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params

        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => this.setState({ user: response.data }))
            .catch(err => this.setState({ error: err.message }))
            .finally(() => this.setState({ loading: false }))
    }

    render() {

        const { user, loading, error } = this.state

        if (error)
            return <ErrorText>{error}</ErrorText>

        if (loading)
            return <Loader />

        return <div>user {user.name}</div>
    }

} 