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
//images
import starRate from "../../assets/star.svg"
import star from "../../assets/star_grey.svg"


const Property = () => {

    const {locId} = useParams();

    let rentProp = list.map((item) => item).find(item => item.id === locId);
    const firstName = rentProp.host.name.split(" ")[0];
    const lastName = rentProp.host.name.split(" ")[1];

    
    return (
        <div className="property">
          
           <Slideshow
                list = {rentProp} 
            />
        <section className="property-informations">
        
                <div className="property-left">
                    <h3 className="property-title">{rentProp.title}</h3>
                    <p className="property-location">{rentProp.location}</p>
                
                    <div className="property-tag">
                        {rentProp.tags.map((item)=> (
                            <Tag 
                                key ={item}
                                tag = {item}/>
                        ))}
                    </div>
                </div>
                
                <div className="property-right">
                    <div className="property-identity">
                        <p className="property-host">
                            <div>{firstName}</div>
                            <div>{lastName}</div>
                            </p>
                        <img className="property-avatar" src ={rentProp.host.picture}/>
            
                    </div>
            
                    <div className="property-rating">
                        <img src={star} alt="icon star rating" className="star-empty"/>
                        <img src={star} alt="icon star rating" className="star-empty"/>
                        <img src={star} alt="icon star rating" className="star-empty"/>
                        <img src={star} alt="icon star rating" className="star-empty"/>
                        <img src={star} alt="icon star rating" className="star-empty"/>
                    </div>
                </div>
            
           
        </section>
           
            
            <div className="property-desc">
                <div className="property-desc-description">
                    <Collapse 
                    title ="Description"
                    text = {rentProp.description}
                />
                </div>
                <div className="property-desc-equipments">
                    <Collapse 
                    title = "Equipements"
                    text = {rentProp.equipments.map((item)=>(
                        <li className="equipment">{item}</li>
                    ))}
                
                />
                </div>           
            
            </div>
        </div>
    )
}

export default Property;