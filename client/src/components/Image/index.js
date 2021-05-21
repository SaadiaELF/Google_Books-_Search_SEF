import React from "react";

function Image({image, title}) {
    return <img className='img-fluid img-thumbnail rounded float-start' src={image} alt={title} />
}

export default Image;
