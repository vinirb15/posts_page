import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css'

export default function Create() {
    const [message, setMessage] = useState('');

    const history = useHistory();

    async function newPost(e) {
        e.preventDefault();

        const data = {
            message
        }

        try {
            await api.post('/posts', data)
            history.push('/')
        } catch (error) {
            alert('error when registering');
        }
    }

    function home(e) {
        e.preventDefault();
        history.push('/')
    }

    return (
        <div className="new-post">
            <div className="content">

                <form onSubmit={newPost}>
                    <input
                        placeholder="New post"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        onKeyDown={e => e.keyCode === 13 && setMessage(e.target.value)}

                    />
                    <button className="button" type="submit">Submit</button>
                    <button className="button buttonBack" onClick={home} type="button">Back to Home</button>
                </form>
            </div>
        </div>
    )
} 