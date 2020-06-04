import React, { Component } from 'react'
import axios from 'axios'

export default class Post extends Component {

    state = {
        title: '',
        article: '',
        image_url: '',
        tags: ''
    }
    componentDidMount() {
        this.getPostData()
    }
    getPostData = async () => {
        const postId = this.props.match.params.postId;
        const res = await axios.get(`/api/v1/post/${postId}/`)
        console.log(res.data)
        let newState = { ...this.state }
        newState = res.data
        this.setState(newState)

    }
    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <img src={this.state.image_url} width='600' />
                <p>{this.state.article}</p>
                <p>{this.state.tags}</p>
            </div>
        )
    }
}
