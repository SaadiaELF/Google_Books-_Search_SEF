import React from "react";

function Button(props) {
    return (


        <button type="button" className={`btn btn-${props.type}`}>{ props.children}</button >


    );
}

export default Button