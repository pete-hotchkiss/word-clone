import React from "react";

function GuessInput({handleNewGuess, gameStillActive}) {

  const [guess, setGuess] = React.useState('');

  return <form className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();

        handleNewGuess(guess);

        //  return the input to blank text 
        setGuess("");
      }}
    >
    game ok: {gameStillActive.toString()}
    <label htmlFor="guess-input">Enter guess:</label>
    <input 
      onChange={(e) => {
        setGuess(e.target.value.toUpperCase())
      }}
      title="Must be exactly 5 characters long and letters only"
      pattern="[A-Z]{5}"
      value={guess}
      id="guess-input" type="text"
      disabled={!gameStillActive} />
  </form>;
}

export default GuessInput;
