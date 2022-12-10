import React from "react";
import { useState } from "react";
import "./collapse.scss";
import chevronDown from "../../assets/chevron_down.svg"

const Collapse = ({text}) => {
    const [editIndex, setEditIndex] = useState(null);
    
    return (
        <React.Fragment>
        {text.map((cat, index)=> (
           
            <div className="collapse" key={index}>
                
                <button className="collapse-btn">
                    <h3 className="collapse-btn-title">{cat.title}</h3>
                    <img 
                        className="collapse-chevron" 
                        src={chevronDown} alt="icon" 
                        value={cat.title}
                        id={cat.id}
                        onClick={() => setEditIndex(editIndex => editIndex === index ? null : index)}
                        />  
                </button>
                { editIndex === index && 
                <div className="collapse-content-active">
                    <p className="collapse-content-text">
                            {cat.text}
                    </p>
                </div>
                }
                     
                
               
            </div>
       
        ))}
       
    </React.Fragment>   
    )
   
}

export default Collapse;