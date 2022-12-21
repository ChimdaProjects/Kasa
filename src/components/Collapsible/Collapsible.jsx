import React from "react";
import { useState, useRef } from "react";
import "./collapsible.scss";
import chevronDown from "../../assets/chevron_down.svg";
import chevronUp from "../../assets/chevron_up.svg";

const Collapsible = ({title, text}) => {

    const [open, setOpen] = useState(false);
    const contentRef = useRef();
    if (contentRef.current) console.log(contentRef.current.scrollHeight);
    return (
           
            <div className="collapse" >
                <button className="collapse-btn">
                    <h3 className="collapse-btn-title">{title}</h3>
                    <img 
                        className="collapse-chevron" 
                        src={open? chevronUp : chevronDown} alt="icon" 
                        value={title}
                        onClick={() => setOpen(!open)}
                    />  
                </button>
                
                <div className="collapse-content-parent"
                    ref={contentRef} style = {open ? {height: contentRef.current.scrollHeight + "px"} : {height: "0px"}}>
                    <div className="collapse-content-text ">
                        {text}
                    </div>
                </div>
            </div> 
    )
   
}

export default Collapsible;