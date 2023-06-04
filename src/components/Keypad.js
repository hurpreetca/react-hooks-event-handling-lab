import React from "react";
function Keypad() {
  function handleClick() {
    console.log("Entering password...");
  }
  return (
    <>
      <input type="password" onChange={handleClick}></input>
    </>
  );
}

export default Keypad;
