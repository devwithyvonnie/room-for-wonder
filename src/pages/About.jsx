function About() {
    return (
      <div className="px-8 py-20 max-w-4xl mx-auto">
        <p className="font-script text-3xl text-coral mb-2">Our Story</p>
        <h1 className="font-display text-5xl text-ink mb-8">
          Room for Wonder was built on one idea
        </h1>
        <p className="font-body text-lg text-ink mb-12">
          Placeholder — the agency's founding story and mission, told from the
          agency's perspective rather than any one advisor's.
        </p>
  
        <h2 className="font-display text-3xl text-plum mb-4">
          The Magical Difference
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Placeholder point one', 'Placeholder point two', 'Placeholder point three'].map((point, i) => (
            <div key={i}>
              <p className="font-body text-ink">{point}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default About;