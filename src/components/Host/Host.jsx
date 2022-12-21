import React from "react";

import "./host.scss";

const Host = ({info}) => {
    return (
        <div className="host">
            <div className="host-name">
                <div>{info.name.split(" ")[0]}</div>
                <div>{info.name.split(" ")[1]}</div>
            </div>
            <img 
                className="host-avatar" 
                src ={info.picture}
                alt="avatar"
            />
        </div>
    )
};

export default Host;