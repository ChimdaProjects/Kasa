import React from "react";
import { useState, useRef } from "react";
import "./collapsible.scss";
import chevronDown from "../../assets/chevron_down.svg";
import chevronUp from "../../assets/chevron_up.svg";



const Collapsible = ({title, text, namePage}) => {

    const [open, setOpen] = useState(false);
    const contentRef = useRef();
    
    //if (namePage === "about" ) {
    //     height = contentRef.current.scrollHeight + "px";
    //} else if(namePage== "property") {
    //     height = 300 + "px";
    //}
   
    //const pageAbout = namePage === "about" ? {height: contentRef.current.scrollHeight + "px"} : {height: 0+"px"};
    //const pageProperty = namePage === "property" ? {height: 300+"px"} : {height: 0+"px"};

    
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
                {/* Condition for the height of the content if the page is about or property */}
                {
                    namePage === "about"  &&
                    <div className="collapse-content-parent"
                        ref={contentRef} 
                        style = {open ? {height : contentRef.current.scrollHeight + "px"} : {height: "0px"}}  
                    >
                        <div className="collapse-content-text ">
                            {text}
                        </div>
                    </div>
                }
                {
                    namePage === "property"  && 
                    <div className="collapse-content-parent"
                        ref={contentRef} 
                        style = {open ? {height : "300px"} : {height: "0px"}}  
                    >
                        <div className="collapse-content-text " style={{height:"300px"}} >
                            {text}
                        </div>
                    </div>
                }
               
                
                    
            </div> 
    )
   
}

export default Collapsible;