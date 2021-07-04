import React, { useContext } from "react";
import { KeyBoardListenerReactContext } from "./index";

export const withKeyBoardListenerReact = (WrappedComponent) => {
  return (props) => {
    const { fetchAllRegisteredCombos } = useContext(
      KeyBoardListenerReactContext
    );
    return (
      <WrappedComponent
        getAllActiveKeyboardShortcuts={fetchAllRegisteredCombos}
        {...props}
      />
    );
  };
};
