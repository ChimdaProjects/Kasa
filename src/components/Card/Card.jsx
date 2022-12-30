import React from 'react';
// react router
import { Link } from 'react-router-dom';
// css
import './card.scss';

const Card = ( { id, title, cover } ) => {
    
    return (

       <Link to = { `/accommodation/${id}` } >
            <div className='card' id = { id }>
                <img 
                    className = 'card-img'
                    src = { cover  }
                    alt = { `illustration of ${title}` }
                />
                <h2 className = 'card-title'>{ title }</h2>
            </div>
       </Link>
        
    );
};

export default Card;