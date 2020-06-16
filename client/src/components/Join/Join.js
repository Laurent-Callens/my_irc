import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
<div className='container'>
	<blockquote class="blockquote text-center mt-5">
	  <p class="mb-0">Bienvenue sur my_IRC</p>
	  <p class="blockquote-footer"> Veuillez entrer votre pseudo ainsi que la room dans laquelle aller </p>
	</blockquote>
	<form>
	  <div className="form-group">
	    <label>Pseudo</label>
	    <input type="text" className="form-control" id="username" onChange={(event) => setName(event.target.value)}/>
	  </div>
	  <div className="form-group">
	    <label>Room</label>
	    <input type="text" className="form-control" id="room" onChange={(event) => setRoom(event.target.value)}/>
	  </div>
		<Link onClick={event => (!name || !room) ? event.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
			<button className="btn btn-primary button" type="submit">Go !</button>
		</Link>
	</form>
</div>
        )
    }

export default Join;