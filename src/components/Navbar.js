
import React, { useState } from 'react';

// import { Link } from "react-router-dom";

    

export default function  Navbar(props) {
  const [colorPlate, setcolorPlate] = useState({
    display: "flex",
    flexDirection: "row-reverse"

});
const colorBoxStyle = {
  width: "25px",
  height: "25px",
  borderRadius: "4px",
  margin: "0 4px",
  cursor: "pointer",
  display: "inline-block"
};
const changeBodyColor = (color) => {
  document.body.style.backgroundColor = color;
};
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
  <a className="navbar-brand" href="#">{props.title}</a>

   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
      </ul>
    </div>
    <div className="colorholder" style={colorPlate}>

      <span
        className="bg-primary" style={colorBoxStyle}
        onClick={() => changeBodyColor("#0d6efd")}
      ></span>
      <span
        className="bg-secondary" style={colorBoxStyle}
        onClick={() => changeBodyColor("#6c757d")}
      ></span>
      <span
        className="bg-success"  style={colorBoxStyle}
        onClick={() => changeBodyColor("#198754")}
      ></span>
      <span
        className="bg-danger"  style={colorBoxStyle}
        onClick={() => changeBodyColor("#dc3545")}
      ></span>
      <span
        className="bg-warning"  style={colorBoxStyle}
        onClick={() => changeBodyColor("#ffc107")}
      ></span>
      <span
        className="bg-info"  style={colorBoxStyle}
        onClick={() => changeBodyColor("#0dcaf0")}
      ></span>
      <span
        className="bg-light border"  style={colorBoxStyle}
        onClick={() => changeBodyColor("#f8f9fa")}
      ></span>
      <span
        className="bg-dark"  style={colorBoxStyle}
        onClick={() => changeBodyColor("#212529")}
      ></span></div>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">{props.modeChange}</label>
</div>
  </div>
</nav>
  )
}
