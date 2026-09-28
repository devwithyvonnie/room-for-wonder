import { Link } from 'react-router-dom';
import Button from '../ui/Buttons';

function Hero() {
  return (
    <section className="px-8 max-w-6xl mx-auto text-center" style={{marginBottom: "50px"}}>
      <p className="font-script text-4xl text-coral-deep mb-2">Thoughtful planning starts here.</p>
      <h1 className="font-display text-6xl text-ink mb-6 leading-tight">
        More room for the wonder. <br /> Less room for the worry.
      </h1>
      <p className="font-body text-lg text-ink max-w-xl mx-auto mb-8">
        Thoughtful vacation planning for families who want to spend less time managing the 
        details and more time looking forward to the memories ahead. From theme parks to cruises 
        (and more to come!), we’ll help make your vacation feel easier from the very beginning.
      </p>
      <Link to="/request-a-quote">
      <Button variant="primary">Plan Your Vacation</Button>
      </Link>
    </section>
  );
}

export default Hero;