const steps = [
    { number: '01', title: "Tell us about your vacation", body: "Start by sharing a little about your family, your travel plans, and what matters most to you. Your travel agent will get to know what you're looking for so we can recommend options that truly fit." },
    { number: '02', title: "Choose the vacation that is right for you", body: "We'll narrow down the possibilities and provide thoughtful recommendations based on your priorities, preferences, and budget. Once you've found the right fit, we'll take care of the booking details and guide you through what comes next." },
    { number: '03', title: "We will be with you along the way", body: "From important deadlines and planning details to questions that come up before and during your vacation, you'll have a travel agent in your corner throughout the process." },
  ];
  
  function HowItWorks() {
    return (
      <div className="px-8 py-20 max-w-4xl mx-auto">
        <p className="font-script text-3xl text-coral-deep mb-2">The Journey</p>
        <h1 className="font-display text-5xl text-ink mb-12">Planning Made Easier</h1>
  
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