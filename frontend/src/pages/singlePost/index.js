import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api';

import './styles.css';

export default class Posts extends Component {
    state = {
        posts: [],
        comments: [],
        comment: [],
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/posts/${id}`)

        this.setState({ posts: response.data[0] })

        const responses = await api.get(`/posts/${id}/comments`)
        if (!!responses.data[0])
            this.setState({ comments: responses.data })
    }

    createComment = (event) => {

        this.setState({ comment: event });

    }

    sendComment = async (e) => {
        e.preventDefault();

        const { id } = this.props.match.params;
        const { comment } = this.state
        const data = {
            "comment": `${comment}`
        }

        try {
            await api.post(`/posts/${id}/comments`, data)
            this.setState({ comments: [...this.state.comments, data] })
            this.setState({ comment: "" })
        } catch (error) {
            console.log(error)
            alert('error when registering');
        }
    }

    render() {
        const { posts, comments, comment } = this.state;

        return (
            <div className="post-info">
                <h1>{posts.message}</h1>

                {comments.map(cmt => (
                    <article key={cmt.id}>
                        <p>{cmt.comment}</p>
                    </article>
                ))}
                <div className='utilsContainer'>
                    <input
                        placeholder="new comment"
                        value={comment}
                        onChange={e => this.createComment(e.target.value)}
                        onKeyDown={e => e.keyCode === 13 && this.sendComment(e)}
                    />
                    <Link className='button' to={'/'} >back to home</Link>
                </div>
            </div>
        );
    };
};