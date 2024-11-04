const themeColors = ["warning", "danger", "secondary", "primary", "success"];

import { useContext } from "react";
import "./ThemeSelector.css";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeSelector() {
  const { changeColor, mode, changeMode } = useContext(ThemeContext);

  console.log(mode);

  function toogleMode() {
    changeMode(mode === "dark" ? "light" : "dark");
  }

  return (
    <div className="container theme-selector">
      <div className="mode-toggle">
        <i
          className={`bi bi-moon-stars${mode === "dark" ? "-fill" : ""}`}
          onClick={toogleMode}
        />
      </div>
      <div className="theme-links">
        {themeColors.map((color) => (
          <span
            key={color}
            className={`bg-${color}`}
            onClick={() => changeColor(color)}
          ></span>
        ))}
      </div>
    </div>
  );
}
