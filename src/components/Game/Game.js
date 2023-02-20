import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import PreviousGuesess from '../PreviousGuesess';
// import Result from "../Result";
import WonBanner from '../WonBanner/WonBanner';
import LostBanner
 from '../LostBanner/LostBanner';
import { NUM_OF_GUESSES_ALLOWED, GameStates } from "../../constants";


// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.


function Game() {

  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(GameStates.running);
  const [answer, setAnswer] = React.useState(sample(WORDS))

  console.log("answer", answer);

  const init = () => {
    setGameStatus(GameStates.running);
    setGuesses([]);  
    setAnswer(sample(WORDS));
  }

  const handleNewGuess = (guess) => {
    let nextGuesses = [...guesses, guess]
    setGuesses(nextGuesses);
    if (guess === answer) {
      setGameStatus(GameStates.won);
      return; 
    } else if (nextGuesses.length == NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(GameStates.lost); 
      return;
    }
  }

  return <>
      {gameStatus === GameStates.won && (
        <WonBanner totalGuesses={guesses.length} handleRestart={init} />
      )}
      {gameStatus === GameStates.lost && (
        <LostBanner answer={answer} handleRestart={init} />
      )}
      <PreviousGuesess guesses={guesses} answer={answer}/>
      <GuessInput handleNewGuess={handleNewGuess} gameState={gameStatus}/>
    </>;
}

export default Game;
