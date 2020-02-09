import React, { Component } from 'react'
import axios from 'axios'
import userImg from './images/user-placeholder.png'
import { Link } from 'react-router-dom'

export default class extends Component {
    constructor() {
        super()
        this.state = {
            kukuriku: 'green'
        }
    }

    getCommentsNum = () => {
        const { id } = this.props.postData

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => this.setState({ commentsNum: res.data.length }))

    }

    changeBorderColor = () => {
        this.setState({ kukuriku: 'black' })
    }

    render() {
        const { postData, user = {} } = this.props,
            { commentsNum, kukuriku } = this.state,
            { title, body } = postData

        return <section className='post box' onClick={this.getCommentsNum} onDoubleClick={this.changeBorderColor} style={{ borderColor: kukuriku }}>
            <div className='user'>
                <div className='userImg' style={{ backgroundImage: `url(${userImg})` }}></div>
                <div className='info'>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                    <div className='time'>9 hours ago</div>
                </div>
            </div>
            <h4>{title}</h4>
            <p>{body}</p>
            {commentsNum ? <div className='commentsNum'>{commentsNum} comment{commentsNum > 1 ? 's' : ''}</div> : null}
        </section>
    }
}