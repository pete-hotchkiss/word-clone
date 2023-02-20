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
  const [gameState, setGameState] = React.useState(true)

  const handleNewGuess = (guess) => {
    setGuesses([...guesses, guess]);
    
    console.log("guess no.", guesses.length);
    
    if (guesses.length == NUM_OF_GUESSES_ALLOWED - 1) {
      setGameState(false); 
      return;
    }
  }

  console.info({ answer });

  return <>
      <PreviousGuesess guesses={guesses} answer={answer}/>
      <GuessInput handleNewGuess={handleNewGuess} gameStillActive={gameState}/>
    </>;
}

export default Game;
