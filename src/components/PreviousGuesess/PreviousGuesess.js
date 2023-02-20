import React from "react";

function PreviousGuesess({guesses}) {


  return <div class="guess-results">
    {
    guesses.map(g => (
      <p class="guess" key={crypto.randomUUID()}>{g}</p>
    ))}
  </div>;
}

export default PreviousGuesess;
