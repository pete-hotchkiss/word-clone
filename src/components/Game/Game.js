import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import PreviousGuesess from '../PreviousGuesess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState([]);

  const handleNewGuess = (guess) => {
    setGuesses([...guesses, guess]);
  }

  return <>
      <PreviousGuesess guesses={guesses}/>
      <GuessInput handleNewGuess={handleNewGuess}/>
    </>;
}

export default Game;
