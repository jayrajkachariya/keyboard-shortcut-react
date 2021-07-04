import { useEffect } from "react";
import { withKeyBoardListenerReact } from "../index";

const TestComponentForHOC = ({ getAllActiveKeyboardShortcuts }) => {
  useEffect(() => {
    console.log("Currently active shortcuts are...");
    console.table(getAllActiveKeyboardShortcuts());
  }, []);

  return null;
};

export const ExampleOfHOC = withKeyBoardListenerReact(TestComponentForHOC);
