import React, { Fragment } from "react";
import "./title.scss";

const Title = ({ title, location }) => {
    return (
        <Fragment>
            <h3 className="title">{title}</h3>
            <p className="location">{location}</p>

        </Fragment>
       
    )
}

export default Title ; 