function Header() {
  return (
    <header>
      <h1>
        <a href="/" aria-label="Brainwave.io">
          Brainwave.io
        </a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="/" aria-label="Demos">
              Demos
            </a>
          </li>
          <li>
            <a href="/" aria-label="Demos">
              Pages
            </a>
          </li>
          |
          <li>
            <a href="/" aria-label="Sign In">
              Sign In
            </a>
          </li>
          <li>
            <button>
              <a href="/" aria-label="Sign Up">
                Sign Up
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
