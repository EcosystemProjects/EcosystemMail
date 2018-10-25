import React from "react";
import './dist/css/loader.css';

export default () => {
  return (
   <div className = "lds-circle"><img src = {require("./Eco-icon.png")} alt="loading"/></div>
  );
};
