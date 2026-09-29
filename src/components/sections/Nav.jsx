import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Buttons";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/how-it-works", label: "How It Works" },
    { to: "/about", label: "About" },
    { to: "/team", label: "Meet the Team" },
    { to: "/destinations", label: "Destinations" },
    { to: "/from-our-guests", label: "From Our Guests" },
    { to: "/faqs", label: "FAQs" },
  ];

  return (
    <header className="relative px-8 py-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between gap-8">
        <Link to="/" className="flex-shrink-0">
          <img
            src="/images/primary logo.png"
            alt="Room for Wonder Travel Co. home"
            className="h-40 md:h-46 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 font-body text-ink">
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/request-a-quote">
            <Button variant="primary">Plan Your Vacation with Us</Button>
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-orchid/15 text-plum text-xl"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden absolute left-4 right-4 mt-4 bg-offwhite border-2 border-orchid/30 rounded-3xl shadow-lg p-8 z-10">
          <div className="flex flex-col">
            {links.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`font-display text-xl text-ink py-3 ${
                  i !== links.length - 1
                    ? "border-b border-dashed border-plum/30"
                    : ""
                }`}>
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/request-a-quote"
            onClick={() => setMenuOpen(false)}
            className="block mt-6">
            <Button variant="primary">Request a Quote</Button>
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Nav;
