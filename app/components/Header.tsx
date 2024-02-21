function Header() {
  const navList = [
    { href: "/", label: "demos" },
    { href: "/", label: "pages" },
    { href: "/", label: "support" },
    { href: "/", label: "contact" },
  ];
  return (
    <header>
      <h1>
        <a href="/" aria-label="Brainwave.io">
          Brainwave.io
        </a>
      </h1>
      <nav>
        <ul className="flex gap-4">
          {navList.map((navItem) => (
            <li key={navItem.label}>
              <a href={navItem.href} aria-label={`View ${navItem.label}`}>
                {navItem.label}
              </a>
            </li>
          ))}
          <div />
          <a href="/" aria-label="sign in">
            sign in
          </a>
          <button>
            <a href="/" aria-label="sign up">
              sign up
            </a>
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
