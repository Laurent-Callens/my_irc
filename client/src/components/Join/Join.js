import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="JoinOuterContainer">
            <div className="JoinInnerContainer">
                <h1 className="heading">Welcome to IRC by L & R !!  </h1>
                <h2 className="heading">Become User of chat register by filling in the fields</h2>
                <div><input className="joinInput" placeholder="Name" className="JoinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
                <div><input className="joinInput" placeholder="Room" className="JoinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit"> start Chat with some friends </button>
                </Link>
            </div>
        </div>
        )
    }

export default Join;