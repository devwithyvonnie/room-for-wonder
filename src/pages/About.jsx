function About() {
  return (
    <div className="px-8 py-20 max-w-4xl mx-auto">
      <p className="font-script text-3xl text-coral-deep mb-2">
        Why Room for Wonder
      </p>
      <h1 className="font-display text-5xl text-ink mb-8">
        Room for Wonder was built on one idea
      </h1>
      <p className="font-body text-lg text-ink mb-12">
        the person planning the vacation deserves to enjoy it, too. 
        
        <br />
        <br />

        We know how easy it is for a vacation that's supposed to bring your family together
        to become another list of decisions, deadlines, and details to manage.
        That's where we come in. 
        
        <br />
        <br />
        
        Our travel agents combine thoughtful
        recommendations, personalized planning, and ongoing support to make the
        process feel easier from the very beginning. You stay part of the
        decisions that matter to you, while we help carry the details, so you
        have more room to look forward to the experience you're creating
        together.
      </p>

      <h2 className="font-display text-3xl text-plum mb-4">
      The Room for Wonder Difference
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          "Thoughtful Recommendations - We take the time to understand what matters to you, then narrow down the possibilities and recommend options that fit your family, priorities, and budget.",
          "Details Handled With Care - From booking and payments to important dates and planning details, we'll help keep everything organized so you don't have to manage it all on your own.",
          "Support You Can Count On - Questions don't stop once your vacation is booked. Your travel agent will be there to guide you before your trip, support you while you're traveling, and check in after your return.",
        ].map((point, i) => (
          <div key={i}>
            <p className="font-body text-ink">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
