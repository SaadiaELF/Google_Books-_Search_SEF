import React, {useContext} from "react";
import BookContext from "../../utils/BookContext"


function BookHeader() {
    const {title, subtitle, authors} = useContext(BookContext);
    return (
        <div>
            <h4 className="text-start"> Title : {title}</h4>
            <h6 className="text-start"> Subtitle :  {subtitle}</h6>
            <p className="text-start">Written by : {authors} </p>
        </div>
    );
}

export default BookHeader;