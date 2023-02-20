import React from "react";

const RestartButton = ({handler}) => {
  return <button onClick={() => handler()}>Restart</button>;
}

function Banner({status, handleRestart, children }) {
  return <div className={`${status} banner`}>
    { children }
    <RestartButton handler={handleRestart}/>
  </div>;
}

export default Banner;
