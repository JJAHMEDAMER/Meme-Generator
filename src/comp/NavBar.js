import React from "react";

// imgs
import trollFace from "../assets/Troll Face.png";

function NavBar() {
  return (
    <div className="navbar">
        <img className="navbar--img" src={trollFace} alt="troll face" />
        <h1 className="navbar--text">Meme Generator</h1>
    </div>
  );
}

export default NavBar;
