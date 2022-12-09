import './card.scss';

const Card = ({titleLocation, srcImgCard, altCard}) => {
    return (
        <div className='card'>
            <h1>{titleLocation}</h1>
            <img 
                src={srcImgCard}
                alt={altCard}
            />
        </div>

    );
};

export default Card;