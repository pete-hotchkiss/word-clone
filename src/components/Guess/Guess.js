import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({letter, status}) {
  const className = status ? `cell ${status}` : "cell";
  return  <span className={className} >{letter}</span>
}


function Guess({value, answer}) {

  let result = checkGuess(value, answer) ?? Array(5).fill("");
  
  return <p className="guess">
    { result.map(
      ({letter, status}) => 
        <Cell letter={letter} status={status} key={crypto.randomUUID()}/>
    )}
  </p>
}

export default Guess;
