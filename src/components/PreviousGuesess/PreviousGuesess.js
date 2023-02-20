import React from "react";

function PreviousGuesess({guesses}) {


  return <div className="guess-results">
    {
    guesses.map(g => (
      <p className="guess" key={crypto.randomUUID()}>{g}</p>
    ))}
  </div>;
}

export default PreviousGuesess;
