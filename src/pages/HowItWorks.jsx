import { Link } from 'react-router-dom';
import Button from '../components/ui/Buttons';

const steps = [
  { number: '01', title: 'Tell us about your ideal vacation', body: "Start by sharing a little about your family, your travel plans, and what matters most to you. Your travel agent will get to know what you're looking for so we can recommend options that truly fit." },
  { number: '02', title: 'Once you’ve selected the right fit…', body: "We'll narrow down the possibilities and provide thoughtful recommendations based on your priorities, preferences, and budget. Once you've found the right fit, we'll take care of the booking details and guide you through what comes next." },
  { number: '03', title: "We'll be with you...", body: "From important deadlines and planning details to questions that come up before and during your vacation, you'll have a travel agent in your corner throughout the process." },
];

function HowItWorks() {
  return (
    <div className="px-8 py-20 max-w-6xl mx-auto">
      <p className="font-script text-4xl text-coral-deep mb-2">What to expect</p>
      <h1 className="font-display text-5xl text-ink mb-12">Planning Made Easier</h1>

      <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
        <div className="relative space-y-12">
          <div className="absolute left-[27px] top-12 bottom-12 w-px border-l-2 border-dashed border-orchid/40" />

          {steps.map((step) => (
            <div key={step.number} className="relative flex gap-6 items-start">
              <span className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-offwhite border-2 border-plum text-orchid font-display text-2xl flex items-center justify-center">
                {step.number}
              </span>
              <div>
                <h2 className="font-display text-2xl text-ink mb-2">{step.title}</h2>
                <p className="font-body text-ink">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <img
          src="/images/PNG image.jpeg"
          alt="Owner working on guest's quote."
          className="w-full rounded-3xl object-cover max-h-[700px]"
        />
      </div>

      <div className="bg-plum rounded-3xl px-8 py-12 text-center">
        <h2 className="font-display text-3xl text-offwhite mb-6">Ready to make room for wonder?</h2>
        <Link to="/request-a-quote">
          <Button variant="primary">Request a Quote</Button>
        </Link>
      </div>
    </div>
  );
}

export default HowItWorks;