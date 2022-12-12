import React from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";
import list from "../../datas/listLocations"

const Location = () => {
    const {locId} = useParams();
    let loc = list.filter(item => {if (item.id == locId) return item} )
    console.log("loc", loc)
    return (
        <div className="location">
           
           <h3>Location </h3>
          
           <Slideshow
            list = {loc} />
        </div>
    )
}

export default Location;