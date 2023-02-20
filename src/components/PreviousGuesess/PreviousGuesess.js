import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function PreviousGuesess({guesses}) {

  const guessList = range(0, NUM_OF_GUESSES_ALLOWED);

  return <div className="guess-results">
    {
      guessList.map(g => (
        <Guess value={guesses[g]} key={crypto.randomUUID()}/>
      )
    )}
  </div>;
}

export default PreviousGuesess;
