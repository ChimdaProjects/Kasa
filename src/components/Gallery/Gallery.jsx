import './gallery.scss';
import Card from '../Card/Card';
import React from 'react';

const Gallery = ({list}) => {
    return (
        <div className="gallery">
            {
                list.map((loc)=> (
                        <Card
                            key={loc.id}
                            /*
                              id={loc.id}
                            title={loc.title}
                            cover={loc.cover}
                            */
                            {...loc}
                          
                        />
                ))
            }
        </div>
    )
}

export default Gallery;