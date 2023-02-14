import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Styles.css";

const index = (props) => {
  return (
    <>
      <div className="box-data">
        <div className="data-color-box" style={{ backgroundColor: props.back }}>
          {" "}
          {props.image}
        </div>
        <div className="data-text-box">
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default index;
