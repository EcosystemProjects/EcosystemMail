import React from "react";
import './dist/css/loader.css';

export default () => {
  return (
   <div className = "lds-circle-small"><img src = {require("./Eco-icon.png")} alt="loading" style = {{width:"50px"}} /></div>
  );
};