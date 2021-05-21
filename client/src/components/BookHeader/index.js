import React from "react";

function BookHeader({ title, subtitle, authors }) {
    return (
        <div>
            <h4 className="text-start"> Title : {title}</h4>
            <h6 className="text-start"> Subtitle :  {subtitle}</h6>
            <p className="text-start">Written by : {authors} </p>
        </div>
    );
}

export default BookHeader;