import React from "react";
import { useParams } from "react-router-dom";

const Location = () => {
    const {locId} = useParams()
    console.log(locId)
    return (
        <div className="location">
           
           <h3>Location </h3>
        </div>
    )
}

export default Location;