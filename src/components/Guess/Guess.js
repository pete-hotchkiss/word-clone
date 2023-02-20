import React from "react";
import { range } from "../../utils";

function Guess({guess}) {

  const letters = (guess && guess.split('')) ?? ["","","","",""];

  return <p className="guess">
    { letters.map(l => <span className="cell" key={crypto.randomUUID()}>{l}</span>)}
  </p>
}

export default Guess;
