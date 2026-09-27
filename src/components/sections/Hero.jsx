import Button from '../ui/Buttons';

function Hero() {
  return (
    <section className="px-8 py-20 max-w-6xl mx-auto text-center">
      <p className="font-script text-3xl text-coral-deep mb-2">Once upon a vacation...</p>
      <h1 className="font-display text-6xl text-ink mb-6 leading-tight">
        Every family's story deserves a magical chapter
      </h1>
      <p className="font-body text-lg text-ink max-w-xl mx-auto mb-8">
      Thoughtful vacation planning for families who want to spend less time managing the 
      details and more time looking forward to the memories ahead. From theme parks to cruises 
      (and more to come!), we’ll help make your vacation feel easier from the very beginning.
      </p>
      <Button variant="primary">Start Your Story</Button>
    </section>
  );
}

export default Hero;