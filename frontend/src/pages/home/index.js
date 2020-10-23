import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css'

export default class Home extends Component {

    state = {
        posts: [],
    }

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = async () => {
        const response = await api.get('/posts')
        this.setState({posts: response.data})
    }

    render() {
        const { posts } = this.state;

        return (
            <div className="posts-list" >
                <div className="containerUtils">
                    <input/>
                    <Link to={'/post/new'}>New Post</Link>
                </div>

                {posts.map(post => (
                    <article key={post.id}>
                        <h2>{post.message}</h2>
                        <Link to={`/posts/${post.id}`}>Acessar</Link>
                    </article>
                ))}

            </div >
        )
    }
}