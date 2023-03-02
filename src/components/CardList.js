import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
    if(true){
        throw new Error('AHHHHHHH!');
    }
    const cardComponent = robots.map((user, i) => {
        return(
        <Card 
        key={i}
        id = {robots[i].id} 
        name = {robots[i].name} 
        email = {robots[i].email}
        /> //Always put a key = x for loops
        );
    });
    
    return(
        <div>
        {cardComponent}
      </div>
    );
}

export default CardList;