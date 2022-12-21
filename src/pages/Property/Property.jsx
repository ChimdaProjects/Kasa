import React, { useEffect} from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
//components
import Slideshow from "../../components/Slideshow/Slideshow";
import Tag from "../../components/Tag/Tag";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import Title from "../../components/Title/Title";
import Rate from "../../components/Rate/Rate";
//data
import list from "../../datas/listLocations";
//css
import "./property.scss"

/**
 * this component returns the page of each property
 * @returns 
 */
const Property = () => {
    // params from the current URL
    const {locId} = useParams();
    // find the info of accommodation clicked
    let rentProp = list.find(item => item.id === locId);
    //redirection
    if (rentProp === undefined) {
        console.log("je rentre dans la condition")
        return <Navigate to="/notfound" /> 
    } 
    //destructuring the object rentProp to use each variable
    const {title, host, description, rating, location, equipments, tags} = rentProp;  

     return (
            
        <div className="property">
        
           <Slideshow
                list = { rentProp } 
            />
            <section className="property-informations">
                <div className="property-left">
                   < Title 
                        title = { title }
                        location = { location } 
                    />
                
                </div>  

                <div className="property-right">
                    <Host info = {host}/>
                 
                </div>
                
            </section>
            <div className="property-details">
                <div className="property-tag">
                        {tags.map((item)=> (
                            <Tag 
                                key ={item}
                                tag = {item}/>
                        ))}
                </div>
                <div className="property-rating">
                        <Rate 
                            rating={rating} 
                        />
                </div>
            </div>
           
            <div className="property-desc">
                <div className="property-desc-description">
                    <Collapse 
                    title ="Description"
                    text = {description}
                />
                </div>
                <div className="property-desc-equipments">
                    <Collapse 
                    title = "Equipements"
                    text = {equipments.map((elt, index)=>(
                            <p key={elt + index} className="equipment">{elt}</p>
                    ))}
                    />
                </div>           
            </div>
        </div>
    )
}

export default Property;