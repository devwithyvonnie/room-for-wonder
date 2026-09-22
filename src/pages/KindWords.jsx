const testimonials = [
    {
      quote: 'Placeholder — a glowing review about how stress-free the planning process was.',
      family: 'The Placeholder Family',
      trip: 'Walt Disney World, 2025',
    },
    {
      quote: 'Placeholder — a review mentioning a specific thoughtful touch the advisor arranged.',
      family: 'The Sample Family',
      trip: 'Universal Orlando, 2025',
    },
    {
      quote: 'Placeholder — a review about feeling taken care of throughout the trip.',
      family: 'The Example Family',
      trip: 'Disneyland, 2024',
    },
  ];
  
  function KindWords() {
    return (
      <div className="px-8 py-20 max-w-6xl mx-auto">
        <p className="font-script text-3xl text-coral mb-2">From Our Families</p>
        <h1 className="font-display text-5xl text-ink mb-12">Kind Words</h1>
  
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.family} className="bg-orchid/10 rounded-3xl p-8">
              <p className="font-body text-ink mb-6 italic">"{t.quote}"</p>
              <p className="font-display text-lg text-plum">{t.family}</p>
              <p className="font-body text-sm text-ink/70">{t.trip}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default KindWords;