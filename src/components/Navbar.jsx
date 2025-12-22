import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Invitation", link: "#invitation" },
    { name: "Our Story", link: "#about" },
    { name: "Events", link: "#events" },
    { name: "Gallery", link: "#gallery" },
    { name: "Location", link: "#location" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f2e6b1]/90 backdrop-blur shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-serif text-[#7a1f3d]"
        >
          Nayana & Mohan
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[#7a1f3d] font-medium">
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                className="hover:text-[#5e142d] transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#7a1f3d] text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#7a1f3d] text-[#f2e6b1] px-6 py-6 space-y-4">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="block text-lg"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
