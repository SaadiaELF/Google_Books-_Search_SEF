import React from "react";

function Button(props) {
    return (
        <a href={props.link} role="button" className={`btn btn-${props.type}`} target="_blank" rel="noopener noreferrer" >{props.children}</a>


    );
}

export default Button