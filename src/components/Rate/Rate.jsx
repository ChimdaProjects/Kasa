import React from "react";
// css
import "./rate.scss";

//images
import starRate from "../../assets/star_rate.svg"
import star from "../../assets/star_grey.svg"

const Rate = ({ rating }) => {
    // create array of star
    const rate = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {
                rate.map((item)=>(
                    <img 
                        key = { item } 
                        src = { item <= parseInt(rating) ? starRate : star } 
                        alt = "icon star rating" 
                    />
                )) 
            }
        </div>
    )
}

export default Rate;