import React from "react";
import './Navbar.css'
function Navbar(props) {
  const handleChangeMode=()=>{
    props.setmode(!props.mode)
  }
  return (
    <div>
      <div className="Navbar container">
        <h1 className="Title">Notes</h1>
       <div className="toggle"> 
       <button className="mode" onClick={handleChangeMode}></button></div>
      </div>
    </div>
  );
}

export default Navbar;
