import React from "react";
import PlusIcon from "../../assets/Add.svg";
import "./roundedButton.css";

const RoundButton = ({onClick}:{onClick:()=>void}) => {
  return (
    <div className="container">
    <button className="round-button" onClick={onClick}>
    <img src={PlusIcon} alt="" />
    </button>
    </div>
  );
};

export default RoundButton;