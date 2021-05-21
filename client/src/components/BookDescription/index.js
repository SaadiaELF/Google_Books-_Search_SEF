import React from "react";

function BookDescription({ description, link, title }) {
    return (
        <div>
            <p className="text-start">{description}</p>
            <a href={link}  target="_blank" rel="noreferrer"> Info Link : {title} </a>
        </div>

    )

}

export default BookDescription;
