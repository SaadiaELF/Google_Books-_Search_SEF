import React, { useContext } from "react";
import BookContext from "../../utils/BookContext"

function BookDescription() {
    const { description } = useContext(BookContext);
    return <p className="text-start">{description} </p>

}

export default BookDescription;
