import React from "react";
import "../styles/Navbar.css";

const Navbar = props => (
    <div className="navbar sticky-top">
        <li className="score">Current Score: {props.score} | Top Score: {props.topScore}</li>
    </div>
)
 

export default Navbar;

