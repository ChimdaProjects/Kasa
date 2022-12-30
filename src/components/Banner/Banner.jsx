//css
import "./Banner.scss"


const Banner = ( { imgSrc, altText, title } ) => {
    return (
        <div className="banner">
            <img 
                src = { imgSrc } 
                alt = { altText }
                className="banner-img" 
            />
            <h1 className="banner-title">
                { title }
            </h1>
        </div>
    )
};

export default Banner;
