import React, { useState } from "react";
// import img
import leftArrow from "../../assets/arrow_back.svg"
import rightArrow from "../../assets/arrow_forward.svg" 
import bullet from "../../assets/point.png"
import point from "../../assets/point_normal.png"
// css
import "./slideshow.scss";

const Slideshow = ( { list } ) => {

    const [currentIndex, setCurrentIndex ] = useState(0);

    // array of pictures
    const pictures = list.pictures;
    // length of pictures
    const nbpic = pictures.length;
    // display of the previous picture when the user clicks on the left arrow 
    const previousPicture = () => {
        if (currentIndex === 0) {
            setCurrentIndex(pictures.length-1)
        } else {
            setCurrentIndex(currentIndex-1)
        }
    }
    // display of the next picture when the user clicks on the right arrow 
    const nextPicture = () => {
        if (currentIndex === pictures.length-1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex+1)
        }
    }
    
    return (
        <div className="slideshow">
            <div 
                className = { `arrow-l ${nbpic > 1 ? "active" : "inactive"}` } 
                onClick = { previousPicture }
            >
                <img 
                    src = { leftArrow }
                    alt = "icon back arrow"
                />

            </div>
            <div className="slideshow-content-img">
                <img 
                    src = { list.pictures[currentIndex] }
                    alt = {`${list.title} à ${list.location}  pic n° ${currentIndex+1}` }
                    className="slideshow-img"
                />
            </div>
           

            <div 
                className = { `arrow-r ${nbpic > 1 ? "active" : "inactive"}` } 
                onClick = { nextPicture }
            >
                <img 
                    src = { rightArrow }
                    alt = "icon forward arrow"
                />
            </div>
            <div className = { `slideshow-counter ${nbpic > 1 ? "active" : "inactive"}` }>
               { pictures.map((item, index)=> (
                
                <img 
                    key = { `bullet-${index}` } 
                    src = { index === currentIndex ? bullet : point } 
                    alt="icon bullet point"
                />
               
               ))}
               
            </div>
        </div>
    )
} 

export default Slideshow;