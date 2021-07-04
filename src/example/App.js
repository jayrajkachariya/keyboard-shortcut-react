import React, { useState } from "react";
import "./App.css";
import {
  KeyBoardListenerReactContextProvider,
  KeyboardShortcutReact,
} from "../index";

function callback(elementID) {
  return function () {
    let element = document.getElementById(elementID);
    Array(element.classList).indexOf("bg-dark") + 1
      ? element.classList.toggle("bg-light")
      : element.classList.toggle("bg-dark");
  };
}

function App() {
  const [elems, setElems] = useState(["a", "b", "c", "d"]);

  const onRemoveElem = (index) => () =>
    setElems((prev) => {
      let _prev = [...prev];
      _prev.splice(index, 1);
      return _prev;
    });

  return (
    <KeyBoardListenerReactContextProvider>
      <div className="flex">
        {elems.map((elem, index) => (
          <div
            className="flex-center bg-light"
            key={elem.toString()}
            onClick={onRemoveElem(index)}
            id={"elem_" + index}
          >
            <h1>{elem.toUpperCase()}</h1>
            <h3>Press "shift {elem}" keys to toggle BG color</h3>
            <KeyboardShortcutReact
              combo={"shift " + elem}
              callback={callback("elem_" + index)}
              description={`SubClassC, Press "shift ${elem}" keys`}
            />
          </div>
        ))}
      </div>
    </KeyBoardListenerReactContextProvider>
  );
}

export default App;
