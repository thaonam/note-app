import React from "react";

const animal = (props) => {
  return (
    <div>
      <h5>My animal hobies: {props.name} width {props.color}</h5>
      <p>{props.children}</p>
    </div>
  );
};

export default animal;
