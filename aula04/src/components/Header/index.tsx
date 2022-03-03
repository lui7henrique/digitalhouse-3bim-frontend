import "./styles.css";

export const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div id="logo-container">
          <img src="/logo.png" alt="React logo" />
          <h1>React</h1>
        </div>
        <nav>
          <a href="/">Docs</a>
          <a href="/">Tutorial</a>
          <a href="/" className="active">
            Blog
          </a>
          <a href="/">Community</a>
        </nav>
      </div>
    </header>
  );
};
