function Header() {
  const navList = [
    { href: "/", label: "demos" },
    { href: "/", label: "pages" },
    { href: "/", label: "support" },
    { href: "/", label: "contact" },
  ];
  return (
    <header className="bg-white flex items-center justify-between max-w-[1110px] mx-auto py-[24px] font-roboto">
      <h1>
        <a
          href="/"
          aria-label="Brainwave.io"
          className="text-[24px] font-bold leading-[28px] tracking-[-0.1px] font-rubik"
        >
          Brainwave.io
        </a>
      </h1>
      <nav>
        <ul className="flex gap-8 items-center capitalize font-bold text-[15px] leading-[26px] tracking-[-0.1px]">
          {navList.map((navItem) => (
            <li key={navItem.label}>
              <a href={navItem.href} aria-label={`View ${navItem.label}`}>
                {navItem.label}
              </a>
            </li>
          ))}
          <div className="w-[1px] h-[21px] bg-[#D5D7DD]" />
          <a href="/" aria-label="sign in">
            sign in
          </a>
          <button className="rounded-[8px] py-[13px] px-[30px] bg-blue leading-none text-white">
            <a href="/" aria-label="sign up" className="capitalize">
              sign up
            </a>
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
