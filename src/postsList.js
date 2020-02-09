import React, { Component } from 'react'
import axios from 'axios'
import Post from './post'
import Loader from './loader'
import ErrorText from './errorText'

export default class PostsList extends Component {
    constructor() {
        super()
        this.state = {
            posts: null,
            users: [],
            loading: true,
            error: null
        }
    }

    componentDidMount() {
        const postsPromise = axios.get('https://jsonplaceholder.typicode.com/posts')
        /* .then(response => this.setState({ posts: response.data }))
        .catch(err => this.setState({ error: err.message }))
        .finally(() => this.setState({ loading: false })) */

        const usersPromise = axios.get('https://jsonplaceholder.typicode.com/users')
        /* .then(response => this.setState({ users: response.data }))
        .catch(err => this.setState({ error: err.message }))
        .finally(() => this.setState({ loading: false })) */

        Promise.all([postsPromise, usersPromise])
            .then(response => this.setState({ posts: response[0].data, users: response[1].data }))
            .catch(err => this.setState({ error: err.message }))
            .finally(() => this.setState({ loading: false }))
    }
    /* 
        componentDidMount() {
    
            //Get Posts List
            const postsPromise = axios.get('https://jsonplaceholder.typicode.com/posts')
    
            //Get Users List
            const usersPromise = axios.get('https://jsonplaceholder.typicode.com/users')
    
            Promise.all([postsPromise, usersPromise])
                .then(res => this.setState({
                    posts: res[0].data,
                    users: res[1].data
                }))
                .catch(err => this.setState({ error: err.message }))
                .finally(() => this.setState({ loading: false }))
    
        } */

    render() {
        const { posts, users, loading, error } = this.state

        if (error)
            return <ErrorText>{error}</ErrorText>

        if (loading)
            return <Loader />

        return <div className='postsList'>{
            posts.map(post => <Post
                key={post.id}
                postData={post}
                user={users.find(user => user.id == post.userId)}
            />)
        }</div>
    }
}