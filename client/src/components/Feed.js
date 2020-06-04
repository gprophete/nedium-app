import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Feed extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.getFeedData()
    }

    getFeedData = async () => {
        try {
            const res = await axios.get('/api/v1/feed/')
            const newState = { ...this.state }
            newState.posts = res.data
            this.setState(newState)
        } catch (error) {
            console.log(error)
        }

    }
    render() {
        return (
            <div>
                Feed Page
                {this.state.posts.map((post) => {
                    return (
                        <div>
                            <Link to={`/singlePost/${post.id}`}>
                                <div>{post.title}</div>
                                <img src={post.image_url} width="400" />
                                <div>Comments: {post.comments.length}</div>
                                <div>Claps: {post.claps.length}</div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}
