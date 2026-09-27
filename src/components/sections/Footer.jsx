import { Link } from 'react-router-dom';
import NewsletterForm from './NewsletterForm';

function Footer() {
  return (
    <footer className="bg-ink text-offwhite px-8 py-12 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <p className="font-script text-2xl text-coral">Room for Wonder</p>

        <nav className="flex flex-wrap gap-4 font-body text-sm">
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/about">About</Link>
          <Link to="/team">Meet the Team</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/kind-words">Kind Words</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/request-a-quote">Request a Quote</Link>
        </nav>

        <div className="max-w-6xl mx-auto mt-8">
  <p className="font-body text-xs text-offwhite/60 mb-2">Get updates on new destinations</p>
  <NewsletterForm compact />
</div>
      </div>

      <p className="font-body text-xs text-offwhite/60 mt-8 text-center">
        © {new Date().getFullYear()} Room for Wonder Travel Co., LLC is an independent agency associated with WorldVia Travel Network.
      </p>
    </footer>
  );
}

export default Footer;