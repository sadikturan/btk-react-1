export default function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <a href="#" className="navbar-brand">
            🍕 Pizza Hot
          </a>
          <button className="btn btn-dark">
            <i class="bi bi-cart3"></i>
            <span className="ms-2">(0)</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
