import React from "react";

function PreviousGuesess({guesses}) {
  return <div class="guess-results">
    <p class="guess">{guesses.length}</p>
    <p class="guess">GUESS</p>
  </div>;
}

export default PreviousGuesess;
