import React from "react";

const RestartButton = ({handler}) => {
  return <button onClick={() => handler()}>Restart</button>;
}

function Result({totalGuesses, guess, answer, handleRestart}) {

  let result;

  if (guess=== answer) {
    result = <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in 
      <strong> {totalGuesses} guesses</strong>.
    </p>
    <RestartButton handler={handleRestart}/>
  </div>;
  } else {
    result = <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    <RestartButton handler={handleRestart}/>
  </div>
  }
  
  return result;
}

export default Result;
