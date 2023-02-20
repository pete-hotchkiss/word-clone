import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";


function Guess({value, answer}) {

  // const result = (value && value.split('')) ?? Array(5).fill("");


  let result = checkGuess(value, answer) ?? Array(5).fill("");

  console.log("Result", answer, result);

  return <p className="guess">
    { result.map(
      ({letter, status}) => 
      <span className={`cell ${status}`} key={crypto.randomUUID()}>{letter}</span>
    )}
  </p>
}

export default Guess;
