import React, { createContext, useState } from "react";
import keypress from "keypress.js";
import { validateType } from "./utils";

export const listener = new keypress.Listener();
export const KeyBoardListenerReactContext = createContext();

export const KeyBoardListenerReactContextProvider = ({ children }) => {
  const [registeredComboList, updateRegisteredComboList] = useState([]);
  const registerCombo = async ({ combo, callback, description, id }) => {
    try {
      validateType(combo, "key combination", "string");
      validateType(callback, "callback", "function");
      validateType(description, "description", "string");
      await listener.register_combo({
        keys: combo,
        on_keydown: callback,
        on_keyup: null,
        on_release: null,
        prevent_default: true,
        prevent_repeat: true,
        is_unordered: false,
        is_counting: false,
        is_exclusive: true,
        is_solitary: false,
        is_sequence: true,
      });
      updateRegisteredComboList((prev) => [
        ...prev,
        {
          id,
          combo,
          callback,
          description,
        },
      ]);
    } catch (e) {
      console.error(e);
    }
  };

  const deRegisterCombo = async ({ combo, callback, description, id }) => {
    try {
      await listener.unregister_combo(combo);
      updateRegisteredComboList((prev) =>
        prev.filter(({ combo: _combo }) => _combo !== combo)
      );
    } catch (e) {
      console.error(e);
    }
  };

  const fetchAllRegisteredCombos = () => registeredComboList;

  const listenerContextValues = {
    registerCombo,
    deRegisterCombo,
    fetchAllRegisteredCombos,
  };

  return (
    <KeyBoardListenerReactContext.Provider value={listenerContextValues}>
      {children}
    </KeyBoardListenerReactContext.Provider>
  );
};
