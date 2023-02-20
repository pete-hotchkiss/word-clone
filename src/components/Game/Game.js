import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import PreviousGuesess from '../PreviousGuesess';
import Result from "../Result";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";


// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.


function Game() {

  const [guesses, setGuesses] = React.useState([]);
  const [isActive, setIsActive] = React.useState(true);
  const [answer, setAnswer] = React.useState(sample(WORDS))

  console.log("answer", answer);

  const init = () => {
    setIsActive(true);
    setGuesses([]);  
    setAnswer(sample(WORDS));
  }

  const handleNewGuess = (guess) => {
    let nextGuesses = [...guesses, guess]
    setGuesses(nextGuesses);
    
    if (nextGuesses.length == NUM_OF_GUESSES_ALLOWED || guess === answer) {
      setIsActive(false); 
      return;
    }
  }

  return <>
      { !isActive &&
        <Result totalGuesses={guesses.length} guess={guesses.at(-1)} answer={answer} handleRestart={init}/>
      } 
      <PreviousGuesess guesses={guesses} answer={answer}/>
      <GuessInput handleNewGuess={handleNewGuess} gameStillActive={isActive}/>
    </>;
}

export default Game;
