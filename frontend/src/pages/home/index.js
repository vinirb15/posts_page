import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css'

export default class Home extends Component {

    state = {
        posts: [],
        page: 1
    }

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = async (page = 1) => {
        const response = await api.get(`/posts/?page=${page}`)
        this.setState({ posts: response.data })
    }

    searchPost = async (event) => {
        try {
            let val = event.target.value;
            const response = await api.get(`/find/${val}`);
            this.setState({ page: 1 })
            this.setState({ posts: response.data });
        } catch (error) {
            this.loadPosts()
        }

    }


    prevPage = () => {
        const { page } = this.state

        if (page === 1) return;

        const pageNumber = page - 1
        this.setState({ page: pageNumber })
        this.loadPosts(pageNumber);
    }

    nextPage = () => {
        const { page } = this.state

        const pageNumber = page + 1
        this.setState({ page: pageNumber })
        this.loadPosts(pageNumber);
    }


    render() {
        const { posts, page } = this.state;

        return (
            <div className="posts-list" >
                <div className="containerUtils">
                    <input
                        placeholder="Search"
                        onChange={this.searchPost}
                    />
                    <Link to={'/post/new'}>New Post</Link>
                </div>

                {posts.map(post => (
                    <article key={post.id}>
                        <h2>{post.message}</h2>
                        <Link to={`/posts/${post.id}`}>Acessar</Link>
                    </article>
                ))}

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <h1>Page {page}</h1>
                    <button disabled={posts.length <= 5} onClick={this.nextPage}>Próximo</button>
                </div>

            </div >
        )
    }
}