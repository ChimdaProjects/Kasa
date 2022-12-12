import './card.scss';
import React from 'react';
import { Link, useParams } from 'react-router-dom';


const Card = ({id, title, cover}) => {
    
    return (
       <Link to ={`/location/${id}`}>
       <div className='card' id={id}>
            <img 
                className='card-img'
                src={cover}
                alt={`illustration of ${title}`}
            />
            <h2 className='card-title'>{title}</h2>
        </div>
       </Link>
        
        

        

    );
};

export default Card;