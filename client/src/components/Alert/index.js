import React from "react";

function Alert(props) {
  return (
    <div
      role="alert"
      className={`alert alert-${props.type} fade in p-4 my-2 text-center align-items-center rounded-3 `}
      style={{ width: "80%", margin: "0", marginTop: 5, ...props.style }}
    >
      {props.children}
    </div>
  );
}

export default Alert;
