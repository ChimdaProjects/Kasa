import React, { Fragment } from "react";

import "./rate.scss";

//images
import starRate from "../../assets/star_rate.svg"
import star from "../../assets/star_grey.svg"

const Rate = ({ rating }) => {

    const rate = [1, 2, 3, 4, 5];
    return (
        <Fragment>
                  {
                           rate.map((item)=>(
                                    <img 
                                        key={item} 
                                        src={item <= parseInt(rating) ? starRate : star} 
                                        alt="icon star rating" 
                                    />
                           )) 
                        }
        </Fragment>
    )
}

export default Rate;