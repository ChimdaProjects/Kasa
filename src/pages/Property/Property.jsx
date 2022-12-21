import React, { useEffect} from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
//components
import Slideshow from "../../components/Slideshow/Slideshow";
import Tag from "../../components/Tag/Tag";
import Collapse from "../../components/Collapse/Collapse";
//data
import list from "../../datas/listLocations";
//css
import "./property.scss"
//images
import starRate from "../../assets/star_rate.svg"
import star from "../../assets/star_grey.svg"



const Property = () => {
   
    const {locId} = useParams();
    console.log("locid", locId);
    let rentProp = list.find(item => item.id === locId);
    console.log("rentProp", rentProp)
    const navigate = useNavigate();
    useEffect(()=> {
        if (rentProp === undefined) {
            console.log("je rentre dans la condition")
            //return <Navigate to="/notfound" /> 
            navigate("/notfound");
        } 
    }, [locId, rentProp])
    if (rentProp === undefined) {
        console.log("je rentre dans la condition")
        return <Navigate to="/notfound" /> 
    }
    
    const {title, host, description, rating, location, equipments, tags} = rentProp;  
    const rate = [1, 2, 3, 4, 5];
    
     return (
            
        <div className="property">
        
           <Slideshow
                list = {rentProp} 
            />
            <section className="property-informations">
            
                <div className="property-left">
                    <h3 className="property-title">{title}</h3>
                    <p className="property-location">{location}</p>
                
                    <div className="property-tag">
                        {tags.map((item)=> (
                            <Tag 
                                key ={item}
                                tag = {item}/>
                        ))}
                    </div>
                </div>
                    
                <div className="property-right">
                    <div className="property-identity">
                        <div className="property-host">
                            <div>{host.name.split(" ")[0]}</div>
                            <div>{host.name.split(" ")[1]}</div>
                        </div>
                        <img 
                            className="property-avatar" 
                            src ={host.picture}
                            alt="avatar"
                        />
                    </div>
            
                    <div className="property-rating">
                        {
                           rate.map((item)=>(
                                    <img 
                                        key={item} 
                                        src={item <= parseInt(rating) ? starRate : star} 
                                        alt="icon star rating" 
                                    />
                           )) 
                        }
                        
                    </div>
                </div>
            </section>
           
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