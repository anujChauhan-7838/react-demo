import React from 'react';
import './card.style.css'


function Card(props){
    console.log(props)
    return (
    <div key={props.monster.id} className="card-container">
        <img src="https://robohash.org/${props.monster.id}?set=set2&size=150x150" alt="robo"></img>
        <h1>{props.monster.name}</h1>
        <p>{props.monster.email}</p>
    </div>
    )
}

export default Card;