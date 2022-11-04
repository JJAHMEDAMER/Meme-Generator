import React from "react";
import data from "../memeData";

function Form() {
  // declaring State variable
  let src = data["data"]["memes"][Math.floor(Math.random() * 100)]["url"];
  
  // Getting state function
  const [_notNeeded, setSrc] = React.useState(src);

  // Changing State
  function randomMeme() {
    src = data["data"]["memes"][Math.floor(Math.random() * 100)]["url"];
    setSrc(src);
  }
  return (
    <div className="form">
      <input className="form--input" placeholder="Top Text" />
      <input className="form--input" placeholder="Bottom Text" />
      <button onClick={randomMeme} className="form--button">
        Get A Meme
      </button>
      <img className="meme--img" src={src} alt="meme" />
    </div>
  );
}

export default Form;
