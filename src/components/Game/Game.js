import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import PreviousGuesess from '../PreviousGuesess';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.


function Game() {

  const [guesses, setGuesses] = React.useState([]);

  const handleNewGuess = (guess) => {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      alert("all out of guesses…");
      return;
    }

    setGuesses([...guesses, guess]);
  }

  console.info({ answer });

  return <>
      <PreviousGuesess guesses={guesses} answer={answer}/>
      <GuessInput handleNewGuess={handleNewGuess}/>
    </>;
}

export default Game;
