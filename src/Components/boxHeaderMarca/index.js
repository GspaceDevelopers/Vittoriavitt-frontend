import React, { useState } from "react";
import "./Styles.css";



const BoxHeaderMarca = (props) => {

  return (
    <div className="border-box-image">
      <img
        src={props.image}
        onClick={() => window.location.href = `${props.link}`}
        alt="images"
      />
    </div>
  );
};

export default BoxHeaderMarca;
