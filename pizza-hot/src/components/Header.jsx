import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Header() {
  const { color, setColor } = useContext(ThemeContext);
  return (
    <header>
      <nav
        className={`navbar navbar-expand bg-${color} border-bottom border-body`}
        data-bs-theme="dark"
      >
        <div className="container">
          <a href="#" className="navbar-brand">
            🍕 Pizza Hot
          </a>
          <button className="btn btn-dark">
            <i className="bi bi-cart3"></i>
            <span className="ms-2">(0)</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
