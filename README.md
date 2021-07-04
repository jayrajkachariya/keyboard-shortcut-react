# Keyboard Shortcut React

This library allows us to add keyboard shortct in browser, it is implemented with react 17. along with [https://github.com/dmauro/Keypress].
It uses context api internally, to use component and HOC, you will have to wrape your component in to `KeyBoardListenerReactContextProvider` Provider as below.

Here is sample example code how we can use it.

## KeyboardShortcutReact Component

By adding below snippets, code will automatically add key down listener and remove the same when component will unmount.

```
import {
  KeyBoardListenerReactContextProvider,
  KeyboardShortcutReact,
} from "keyboard-shortcut-react"; 
// This is not yet published on npm so this might work in future version. 
// For now refer example in [https://github.com/jayrajkachariya/keyboard-shortcut-react/blob/main/src/example/App.js]

function App() {
  return (
    <KeyBoardListenerReactContextProvider> 
      <KeyboardShortcutReact
        combo="shift 1" 
        callback={callbackFunction}
        description="description"
      />
    </KeyBoardListenerReactContextProvider>
  );
}
```

| prop | type  | Description |
| --- | --- | --- |
| `combo` | `string` | Shortcut keys (Space seperated) E.g. `shift a b` |
| `callback` | `function` | Callback function to be called upon shortcut key(s) press |
| `description` | `string` | This is for your ease, you can see `description` and find out why this shortcut was added, no need to dig into callbacks |

## withKeyBoardListenerReact(WrappedComponent) HOC

This will add `getAllActiveKeyboardShortcuts` method to props, which yiels exact details of currently added key-down listners. 
(Heads Up: This only provides all key down listeners added via above component calls, this uses internal state. So, it won't retuen key-down event listeners added by other sources.)

```
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

```


