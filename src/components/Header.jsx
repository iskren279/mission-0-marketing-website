import "../styles/Header.css";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <h2>MA</h2>
      </div>

      <div className="company-name">
        Marketing Association NZ
      </div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">News</a>
        <a href="#">Events</a>
        <a href="#">About</a>
      </nav>

      <button className="login-btn">
        Login
      </button>

      <button className="menu-btn">
        ☰
      </button>

    </header>
  );
}

export default Header;