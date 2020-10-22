import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Posts extends Component {
    state = {
        posts: {},
        comments: {},
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/posts/${id}`)

        this.setState({ posts: response.data[0] })

        const responses = await api.get(`/posts/${id}/comments`)
        console.log(responses.data[0])
        if(!!responses.data[0])
        this.setState({ comments: responses.data[0] })
    }


    render() {
        const { posts, comments } = this.state;

        return (
            <div className="post-info">
                <h1>{posts.message}</h1>
                <p>{comments.comment}</p>
            </div>
        );
    };
};