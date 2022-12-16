import React, { useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
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
    let rentProp = list.find(item => item.id === locId);
    const navigate = useNavigate();
   
    useEffect(()=> {
        if (rentProp === undefined) {
           navigate("/notfound");
        }
    }, [rentProp, locId, navigate])
        
    const rate = [1, 2, 3, 4, 5];
    
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
                        <div className="property-host">
                            <div>{rentProp.host.name.split(" ")[0]}</div>
                            <div>{rentProp.host.name.split(" ")[1]}</div>
                        </div>
                        <img 
                            className="property-avatar" 
                            src ={rentProp.host.picture}
                            alt="avatar"
                        />
                    </div>
            
                    <div className="property-rating">
                        {
                           rate.map((item)=>(
                                    <img 
                                        key={item} 
                                        src={item <= parseInt(rentProp.rating) ? starRate : star} 
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
                    text = {rentProp.description}
                />
                </div>
                <div className="property-desc-equipments">
                    <Collapse 
                    title = "Equipements"
                    text = {rentProp.equipments.map((elt, index)=>(
                            <p key={elt + index} className="equipment">{elt}</p>
                    ))}
                    />
                </div>           
            </div>
        </div>
    )
}

export default Property;