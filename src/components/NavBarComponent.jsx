function NavBarComponent() {
  return (
    <nav className="px-10 py-16">
      <ul className="flex justify-between">
        {navMenus.map((navMenu) => (
          <li key={navMenu}>{navMenu}</li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBarComponent;

const navMenus = [
  "Your Kits",
  "Search Icons",
  "Icons",
  "Docs",
  " Plans",
  "Support",
  "Podcast",
];
