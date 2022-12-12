import React from "react";
import "./slideshow.scss";
import leftArrow from "../../assets/arrow_back.svg"
import rightArrow from "../../assets/arrow_forward.svg" 
import { useState } from "react";

const Slideshow = ({list}) => {
    let pictures = list[0].pictures;
    const [curentIndex, setCurrentIndex ] = useState(0);
    const previousPicture = () => {
        if (curentIndex === 0) {
            setCurrentIndex(pictures.length-1)
        } else {
            setCurrentIndex(curentIndex-1)
        }
    }
    const nextPicture = () => {
        if (curentIndex === pictures.length-1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(curentIndex+1)
        }
        
    }
    return (
        <div className="slideshow">
            <div className="arrow-l" onClick={previousPicture}>
                <img src={leftArrow}/>
            </div>
            <img 
                src={list[0].pictures[curentIndex]}
                alt="image appart"
                className="img"
            />
            <div className="arrow-r" onClick={nextPicture}>
                <img src={rightArrow}/>
            </div>
            <div className="slideshow-gallery">
                {pictures.map((img, index)=> (
                    <div className="slideshow-gallery-content" key={index}>
                        <img className="slideshow-gallery-content-pic" src={img} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slideshow;