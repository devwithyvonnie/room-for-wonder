const steps = [
    { number: '01', title: 'Tell us your vision', body: 'Placeholder — the initial consultation.' },
    { number: '02', title: 'We craft your itinerary', body: 'Placeholder — the planning phase.' },
    { number: '03', title: 'You travel, we support', body: 'Placeholder — ongoing support during the trip.' },
  ];
  
  function HowItWorks() {
    return (
      <div className="px-8 py-20 max-w-4xl mx-auto">
        <p className="font-script text-3xl text-coral mb-2">The Journey</p>
        <h1 className="font-display text-5xl text-ink mb-12">How It Works</h1>
  
        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6 items-start">
              <span className="font-display text-4xl text-orchid">{step.number}</span>
              <div>
                <h2 className="font-display text-2xl text-ink mb-2">{step.title}</h2>
                <p className="font-body text-ink">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default HowItWorks;