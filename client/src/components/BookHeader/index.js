import React from "react";


function BookHeader(props) {
    return (
        <div>
            <h4 className="text-start"> Title {props.title}</h4>
            <h6 className="text-start"> Subtitle {props.subtitle}</h6>
            <p className="text-start">Written by {props.authors} </p>
        </div>
    );
}

export default BookHeader;