// For testing purposes
import React from "react";
import ReactDOM from "react-dom";
import App from "./example/App";

ReactDOM.render(<App />, document.getElementById("root"));

// For library purposes
export {
  KeyBoardListenerReactContextProvider,
  KeyBoardListenerReactContext,
} from "./KeyBoardListenerReactContext";
export { withKeyBoardListenerReact } from "./KeyBoardListenerReactContextHOC";
export { KeyboardShortcutReact } from "./KeyboardShortcutReact";
