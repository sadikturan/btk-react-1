import { useReducer } from "react";
import { createContext, useState } from "react";
import { themeReducer } from "../reducers/themeReducer";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "primary",
    mode: "dark",
  });

  function changeColor(value) {
    dispatch({ type: "CHANGE_COLOR", payload: value });
  }

  function changeMode(value) {
    dispatch({ type: "CHANGE_MODE", payload: value });
  }

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
