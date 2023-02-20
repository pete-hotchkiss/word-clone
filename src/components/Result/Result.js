import React from "react";

function Result({guesses, answer}) {

  let result;

  console.log("gusses", guesses);

  if (guesses.at(-1) === answer) {
    result = <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>{guesses.length} guesses</strong>.
    </p>
  </div>;
  } else {
    result = <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </div>
  }
  
  return result;
}

export default Result;
