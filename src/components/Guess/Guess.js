import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({letter, status}) {
  const className = status ? `cell ${status}` : "cell";
  return  <span className={className} key={crypto.randomUUID()}>{letter}</span>
}


function Guess({value, answer}) {

  let result = checkGuess(value, answer) ?? Array(5).fill("");
  
  return <p className="guess">
    { result.map(
      ({letter, status}) => 
        <Cell letter={letter} status={status}/>
    )}
  </p>
}

export default Guess;
