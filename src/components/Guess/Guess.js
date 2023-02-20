import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";


function Guess({value, answer}) {

  let result = checkGuess(value, answer) ?? Array(5).fill("");
  
  return <p className="guess">
    { result.map(
      ({letter, status}) => 
      <span className={`cell ${status}`} key={crypto.randomUUID()}>{letter}</span>
    )}
  </p>
}

export default Guess;
