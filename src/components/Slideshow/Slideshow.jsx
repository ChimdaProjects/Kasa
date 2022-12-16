import React from "react";
import "./slideshow.scss";
import leftArrow from "../../assets/arrow_back.svg"
import rightArrow from "../../assets/arrow_forward.svg" 
import bullet from "../../assets/point.png"
import point from "../../assets/point_normal.png"


import { useState } from "react";

const Slideshow = ({list}) => {

    const pictures = list.pictures;
    const nbpic = pictures.length;

    const [currentIndex, setCurrentIndex ] = useState(0);

    const previousPicture = () => {
        if (currentIndex === 0) {
            setCurrentIndex(pictures.length-1)
        } else {
            setCurrentIndex(currentIndex-1)
        }
    }

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
                className={`arrow-l ${nbpic > 1 ? "active" : "inactive"}`} 
                onClick={previousPicture}
            >
                <img 
                    src={leftArrow}
                    alt="icon back arrow"
                />

            </div>

            <img 
                src={list.pictures[currentIndex]}
                alt={`${list.title} à ${list.location}  pic n° ${currentIndex+1}`}
                className="slideshow-img"
            />

            <div 
                className={`arrow-r ${nbpic > 1 ? "active" : "inactive"}`} 
                onClick={nextPicture}
            >
                <img 
                    src={rightArrow}
                    alt="icon forward arrow"
                />
            </div>
            <div className={`slideshow-counter ${nbpic > 1 ? "active" : "inactive"}`}>
               { pictures.map((item, index)=> (
                
                <img key={`bullet-${index}`} src={index === currentIndex ? bullet : point} />
               
               ))}
               
            </div>
            {/*<div className="slideshow-counter">
                {curentIndex+1} / {nbpic}
             </div>*/}
            
        </div>
    )
} 

export default Slideshow;