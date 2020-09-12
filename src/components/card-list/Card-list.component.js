import React from 'react';
import Card from '../card/Card.component';
import './Card-list.style.css';

function CardList(props){
    console.log(props)
    return (
    <div>
    
    <div className="card-list">
     {props.monsters.map(monster=><Card key={monster.id} monster={monster}></Card>)}
    </div>
    </div>
    
    )
}

export default CardList;