import { useState } from "react";
import "./App.css";
import {state,stateContext} from './context'
import PageWrapper from "./PageWrapper";

function App() {
  const [obj] = useState(state);
  const [currentTheme, setCurrentTheme] = useState(state.theme.light);

  const toggleTheme = () => {
    setCurrentTheme((prev) =>
      prev === state.theme.light ? state.theme.darck : state.theme.light
    );
  };

  return (
    <>
    <stateContext.Provider value={{obj,current:currentTheme,toggleTheme}}>
      <div className="App">
        HOME
        <PageWrapper />
      </div>
    </stateContext.Provider>
    <button onClick={toggleTheme}>1111111111</button>
    </>

  );
}

export default App;
