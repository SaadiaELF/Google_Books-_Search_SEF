import React from "react";

function Container(props) {
    return (
        <div className="container my-5">
            <div className="px-4 py-5 my-5 text-center align-items-center rounded-3 border shadow-lg">
            {props.children}
            </div>
        </div>
    );
}

export default Container;