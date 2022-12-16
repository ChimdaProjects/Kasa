import React from "react";
import { useState } from "react";
import "./collapse.scss";
import chevronDown from "../../assets/chevron_down.svg";
import chevronUp from "../../assets/chevron_up.svg";

const Collapse = ({title, text}) => {

    const [open, setOpen] = useState(false);

    return (
           
            <div className="collapse" >
                
                <button className="collapse-btn">
                    <h3 className="collapse-btn-title">{title}</h3>
                    <img 
                        className="collapse-chevron" 
                        src={open? chevronUp : chevronDown} alt="icon" 
                        value={title}
                       
                        onClick={
                            () => setOpen(!open)
                        }
                    />  
                </button>
                
                <div className={open? "collapse-content-active":"collapse-content-inactive" }>
                    <p className="collapse-content-text ">
                        {text}
                    </p>
                </div>
                
            </div> 
    )
   
}

export default Collapse;