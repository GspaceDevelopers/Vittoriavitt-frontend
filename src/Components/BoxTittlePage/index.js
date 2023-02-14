import React from "react";
import "./Styles.css";

const Box = (props) => {
  return (
    <div>
      <div className="titulo-page" style={{ background: props.color }}>
        <h2>{props.titulo}</h2>
      </div>
    </div>
  );
};

export default Box;
