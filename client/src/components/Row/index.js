import React from "react";

function Row(props) {
  return <div className={`row align-items-start ${props.padding} ${props.border}` } {...props} />;
}

export default Row;
