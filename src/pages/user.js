import React from 'react'
import axios from 'axios'
import Loader from '../loader'
import ErrorText from '../errorText'
import queryString from 'query-string'
import { Link } from 'react-router-dom'

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

        const { location = {} } = this.props,
            { user, loading, error } = this.state

        const query = queryString.parse(location.search)

        if (error)
            return <ErrorText>{error}</ErrorText>

        if (loading)
            return <Loader />

        return <div>
            user {user.name}

            <br />
            <Link to={`${location.pathname}?mode=posts`}>Posts</Link>
            <br />
            <Link to={`${location.pathname}?mode=alboms`}>Alboms</Link>

            {query.mode == 'posts' ? <div>
                Posts
            </div> : null}
            {query.mode == 'alboms' ? <div>
                Alboms
            </div> : null}
        </div>
    }

} 