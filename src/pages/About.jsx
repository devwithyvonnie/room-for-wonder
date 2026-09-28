import { Link } from "react-router-dom";
import Button from "../components/ui/Buttons";

const differences = [
  {
    title: "Thoughtful Recommendations",
    body: "We take the time to understand what matters to you, then narrow down the possibilities and recommend options that fit your family, priorities, and budget.",
  },
  {
    title: "Details Handled With Care",
    body: "From booking and payments to important dates and planning details, we'll help keep everything organized so you don't have to manage it all on your own.",
  },
  {
    title: "Support You Can Count On",
    body: "Questions don't stop once your vacation is booked. Your travel agent will be there to guide you before your trip, support you while you're traveling, and check in after your return.",
  },
];

function About() {
  return (
    <div className="px-8 py-20 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <p className="font-script text-3xl text-coral-deep mb-2">Why Room for Wonder</p>
          <h1 className="font-display text-5xl text-ink mb-8">Room for Wonder was built on one idea</h1>
          <p className="font-body text-ink mb-4">the person planning the vacation deserves to enjoy it, too.</p>
          <p className="font-body text-ink mb-4">
            We know how easy it is for a vacation that's supposed to bring your family together to become another list of decisions, deadlines, and details to manage. That's where we come in.
          </p>
          <p className="font-body text-ink">
            Our travel agents combine thoughtful recommendations, personalized planning, and ongoing support to make the process feel easier from the very beginning. You stay part of the decisions that matter to you, while we help carry the details, so you have more room to look forward to the experience you're creating together.
          </p>
        </div>
        <img
          src="/images/8496484F-4EB2-4241-BAF0-F36646CF58B4_1_102_o.jpeg"
          alt="Guests blowing confetti in front of Cinderella Castle at Walt Disney World"
          className="w-full rounded-3xl object-cover max-h-[600px]"
        />
      </div>

      <h2 className="font-display text-4xl text-plum mb-8 text-center">The Room for Wonder Difference</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {differences.map((item) => (
          <div key={item.title} className="bg-orchid/10 rounded-3xl p-8">
            <p className="font-script text-3xl text-orchid mb-2">{item.title}</p>
            <p className="font-body text-ink">{item.body}</p>
          </div>
        ))}
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

export default About;
