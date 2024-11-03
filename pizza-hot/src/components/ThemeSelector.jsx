const themeColors = ["warning", "danger", "secondary", "primary", "success"];

import { useContext } from "react";
import "./ThemeSelector.css";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeSelector() {
  const { setColor } = useContext(ThemeContext);

  return (
    <div className="container theme-selector">
      <div className="theme-links">
        {themeColors.map((color) => (
          <span
            key={color}
            className={`bg-${color}`}
            onClick={() => setColor(color)}
          ></span>
        ))}
      </div>
    </div>
  );
}
