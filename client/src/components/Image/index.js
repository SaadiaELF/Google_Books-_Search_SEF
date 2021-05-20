import React from "react";

function Image(props) {
    return <img className='img-fluid img-thumbnail rounded float-start' src={props.image} alt={props.title} />
}

export default Image;
