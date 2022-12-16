import React from "react";
import "./tag.scss";

const Tag = ({tag}) => {
    return (
        <div className="tag">
            <p className="tag-content">{tag}</p>
        </div>
    )
}

export default Tag;