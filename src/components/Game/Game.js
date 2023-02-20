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

  const init = () => {
    setIsActive(true);
    setGuesses([]);  
    setAnswer(sample(WORDS));
  }

  const handleNewGuess = (guess) => {
    setGuesses([...guesses, guess]);
    
    if (guesses.length == NUM_OF_GUESSES_ALLOWED - 1 || guess === answer) {
      setIsActive(false); 
      return;
    }
  }

  return <>
      { !isActive &&
        <Result guesses={guesses} answer={answer} handleRestart={init}/>
      } 
      <PreviousGuesess guesses={guesses} answer={answer}/>
      <GuessInput handleNewGuess={handleNewGuess} gameStillActive={isActive}/>
    </>;
}

export default Game;
