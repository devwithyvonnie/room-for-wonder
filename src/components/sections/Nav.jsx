import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Buttons';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/about', label: 'About' },
    { to: '/team', label: 'Meet the Team' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/kind-words', label: 'Kind Words' },
    { to: '/faqs', label: 'FAQs' },
  ];

  return (
    <header className="relative px-8 py-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between gap-8">
        <Link to="/" className="font-script text-3xl text-plum">
          Room for Wonder
        </Link>

        <nav className="hidden md:flex items-center gap-6 font-body text-ink">
          {links.map((link) => (
            <Link key={link.to} to={link.to}>{link.label}</Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/request-a-quote">
            <Button variant="primary">Request a Quote</Button>
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden font-display text-2xl text-plum"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 mt-6 font-body text-ink">
          {links.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link to="/request-a-quote" onClick={() => setMenuOpen(false)}>
            <Button variant="primary">Request a Quote</Button>
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Nav;