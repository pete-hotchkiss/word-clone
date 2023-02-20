import React from "react";
import { range } from "../../utils";

function Guess({guess}) {

  const letters = (guess && guess.split('')) ?? ["","","","",""];

  console.log("guess is", guess);
  
  return <p className="guess">
    { letters.map(l => <span className="cell">{l}</span>)}
    
  </p>
}

export default Guess;
