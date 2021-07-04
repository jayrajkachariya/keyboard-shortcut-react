import { useEffect, useContext } from "react";
import { KeyBoardListenerReactContext } from "./index";

export function KeyboardShortcutReact({ combo, callback, description }) {
  const { registerCombo, deRegisterCombo } = useContext(
    KeyBoardListenerReactContext
  );

  useEffect(function () {
    registerCombo({ combo, callback, description });
    return () => {
      deRegisterCombo({ combo, callback, description });
    };
  }, []);

  return null;
}
