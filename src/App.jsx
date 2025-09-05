import React, { useState } from "react";
import styles from "./App.module.css";
import Display from "./component/Display";
import ButtonsContainer from "./component/ButtonsContainer";
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDiplayValue = calVal + buttonText;
      // console.log(newDiplayValue);
      setCalVal(newDiplayValue);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
