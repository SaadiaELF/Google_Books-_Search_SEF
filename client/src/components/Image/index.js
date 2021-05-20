import React, { useContext } from "react";
import BookContext from "../../utils/BookContext"

function Image() {
    const { image, title } = useContext(BookContext);
    return <img className='img-fluid img-thumbnail rounded float-start' src={image} alt={title} />
}

export default Image;
