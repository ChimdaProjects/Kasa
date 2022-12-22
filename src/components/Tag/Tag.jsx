import React, { Fragment } from "react";
import "./tag.scss";

const Tag = ({tags}) => {
    return (
        <div className="tag">
            { tags.map((tag,index) => (
                <div className="tag-content" key={`${tag}-${index}`}>{ tag }</div>
            ))
            }
        </div>
    )
}

export default Tag;