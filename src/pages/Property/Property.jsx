import React from "react";
import { useParams } from "react-router-dom";
//components
import Slideshow from "../../components/Slideshow/Slideshow";
import Tag from "../../components/Tag/Tag";
import Collapse from "../../components/Collapse/Collapse";
//data
import list from "../../datas/listLocations";
//css
import "./property.scss"


const Property = () => {

    const {locId} = useParams();

    let rentProp = list.map((item) => item).find(item => item.id === locId);
    
    return (
        <div className="property">
          
           <Slideshow
                list = {rentProp} 
            />

            <h3 className="property-title">{rentProp.title}</h3>
            <p className="">{rentProp.host.name}</p>
            <img src ={rentProp.host.picture}/>
            <p>{rentProp.location}</p>
            <div className="property-tag">
                {rentProp.tags.map((item)=> (
                    <Tag 
                        key ={item}
                        tag = {item}/>
                ))}
            </div>
            <div className="property-desc">
            <Collapse 
                title ="Description"
                text = {rentProp.description}
            />
            <Collapse 
                title = "Equipements"
                text = {rentProp.equipments}
                
            />
            </div>
        </div>
    )
}

export default Property;