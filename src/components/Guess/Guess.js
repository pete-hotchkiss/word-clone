import React from "react";
import { range } from "../../utils";

function Guess({value}) {

  const letters = (value && value.split('')) ?? Array(5).fill("");

  return <p className="guess">
    { letters.map(l => <span className="cell" key={crypto.randomUUID()}>{l}</span>)}
  </p>
}

export default Guess;
