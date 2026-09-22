import Button from '../ui/Buttons';

function Hero() {
  return (
    <section className="px-8 py-20 max-w-6xl mx-auto text-center">
      <p className="font-script text-3xl text-coral mb-2">Once upon a vacation...</p>
      <h1 className="font-display text-6xl text-ink mb-6 leading-tight">
        Every family's story deserves a magical chapter
      </h1>
      <p className="font-body text-lg text-ink max-w-xl mx-auto mb-8">
        Placeholder subheading — Room for Wonder plans Disney and family
        vacations so you can spend less time planning and more time making
        memories.
      </p>
      <Button variant="primary">Start Your Story</Button>
    </section>
  );
}

export default Hero;