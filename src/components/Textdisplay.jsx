import React from "react";

function TextDisplay(props) {
  return (
    <div>
      <strong>{props.name}</strong> {props.value} <br />
    </div>
  );
}

export default TextDisplay;
