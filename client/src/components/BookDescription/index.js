import React from "react";

function BookDescription({ description, link, title }) {
    return (
        <div>
            <p className="text-start">{description}</p>
        </div>

    )

}

export default BookDescription;
