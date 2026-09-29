import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { agents } from "../data/agents";
import Button from "../components/ui/Buttons";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_2ckjes5";
const EMAILJS_TEMPLATE_ID = "template_xdzmczt";
const EMAILJS_PUBLIC_KEY = "1fM-VwQLY8YzNxUN8";

const priorityOptions = [
  "Convenience & Ease",
  "Location",
  "Dining",
  "Resort Amenities",
  "Relaxation",
  "Special Experiences",
  "Time with Family",
  "Something for Everyone",
  "Kid-Friendly Options",
  "Adults-Only Time",
  "Staying Within Budget",
  "Other",
];

const budgetFlexibilityOptions = [
  { value: "strict", label: "I'd like to stay within this amount" },
  {
    value: "target",
    label: "This is my target, but I'm flexible for the right option",
  },
  {
    value: "unsure",
    label:
      "I'm not sure what a realistic budget is yet and would like guidance",
  },
];

const initialForm = {
  parentName: "",
  email: "",
  phone: "",
  hearAboutUs: "",
  referral: "",
  numAdults: "",
  numKids: "",
  kidsAges: "",
  numRooms: "",
  partyNotes: "",
  destination: "",
  arrivalDate: "",
  departureDate: "",
  flexibleDates: false,
  priorities: [],
  budget: "",
  budgetFlexibility: "",
  specialOccasion: "",
  accessibilityNeeds: "",
  dietaryNeeds: "",
  details: "",
};

function SectionHeader({ number, title, subtitle, color = "plum" }) {
  const colors = {
    plum: "bg-plum",
    orchid: "bg-orchid",
    teal: "bg-teal",
    coral: "bg-coral",
  };
  return (
    <div className="flex items-start gap-4 mb-6">
      <span
        className={`flex-shrink-0 w-10 h-10 rounded-full ${colors[color]} text-offwhite font-display flex items-center justify-center text-lg`}>
        {number}
      </span>
      <div>
        <h2 className="font-display text-2xl text-ink">{title}</h2>
        {subtitle && (
          <p className="font-body text-sm text-ink/70">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

function Field({ label, name, className = "", ...inputProps }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block font-body text-sm text-ink mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        {...inputProps}
        className="w-full px-4 py-3 rounded-xl border border-ink/20 font-body"
      />
    </div>
  );
}

function RequestQuote() {
  const [searchParams] = useSearchParams();
  const preselectedAgent = searchParams.get("agent") || "";

  const [form, setForm] = useState({
    ...initialForm,
    agentId: preselectedAgent,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function togglePriority(option) {
    setForm((prev) => ({
      ...prev,
      priorities: prev.priorities.includes(option)
        ? prev.priorities.filter((p) => p !== option)
        : [...prev.priorities, option],
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const agent = agents.find((a) => a.id === form.agentId);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: agent.email,
          parent_name: form.parentName,
          email: form.email,
          phone: form.phone,
          hear_about_us: form.hearAboutUs,
          referral: form.referral,
          num_adults: form.numAdults,
          num_kids: form.numKids,
          kids_ages: form.kidsAges,
          num_rooms: form.numRooms,
          party_notes: form.partyNotes,
          destination: form.destination,
          arrival_date: form.arrivalDate,
          departure_date: form.departureDate,
          flexible_dates: form.flexibleDates ? "Yes" : "No",
          priorities: form.priorities.join(", "),
          budget: form.budget,
          budget_flexibility: form.budgetFlexibility,
          special_occasion: form.specialOccasion,
          accessibility_needs: form.accessibilityNeeds,
          dietary_needs: form.dietaryNeeds,
          details: form.details,
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => setSubmitted(true))
      .catch((err) => {
        console.error("Email failed to send:", err);
        alert(
          "Something went wrong sending your request — please try again or contact us directly."
        );
      });
  }

  if (submitted) {
    return (
      <div className="px-8 py-32 max-w-2xl mx-auto text-center">
        <p className="font-script text-4xl text-coral-deep mb-4">
          Request received
        </p>
        <h1 className="font-display text-4xl text-ink mb-4">
          Your vacation planning starts now
        </h1>
        <p className="font-body text-ink">
          Thank you, {form.parentName || "friend"} — Your quote request is on
          its way to Room for Wonder. We’ll be in touch by the end of the next
          business day to learn more about your plans and get started.
        </p>
      </div>
    );
  }

  return (
    <div className="px-8 max-w-3xl mx-auto">
      <p className="font-script text-4xl text-coral-deep mb-2">Let's Begin</p>
      <h1 className="font-display text-5xl text-ink mb-4">
        Plan Your Vacation With Us
      </h1>
      <p className="font-body text-ink mb-12">
        Every great vacation starts with getting to know you. Tell us a little
        about your family, what you're dreaming about, and what matters most for
        your trip.
      </p>

      <form onSubmit={handleSubmit} className="space-y-16">
        <section>
          <SectionHeader
            number="01"
            title="Let's Get Acquainted"
            subtitle="First, tell us a little about you."
            color="teal"
          />
          <div className="grid sm:grid-cols-2 gap-6">
            <Field
              label="Your Name"
              name="parentName"
              value={form.parentName}
              onChange={handleChange}
              required
            />
            <Field
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Field
              label="Phone Number"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
            />
            <Field
              label="How did you hear about us?"
              name="hearAboutUs"
              value={form.hearAboutUs}
              onChange={handleChange}
            />
            <Field
              label="If someone referred you, who can we thank? (optional)"
              name="referral"
              value={form.referral}
              onChange={handleChange}
              className="sm:col-span-2"
            />
            <div>
              <label
                htmlFor="agentId"
                className="block font-body text-sm text-ink mb-1">
                Who would you like to work with?
              </label>
              <select
                id="agentId"
                name="agentId"
                value={form.agentId}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-ink/20 font-body">
                <option value="">Select an agent</option>
                {agents.map((agent) => (
                  <option key={agent.id} value={agent.id}>
                    {agent.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader
            number="02"
            title="Who's Traveling?"
            subtitle="Tell us who's coming along."
            color="orchid"
          />
          <div className="grid sm:grid-cols-2 gap-6">
            <Field
              label="Number of Adults"
              name="numAdults"
              type="number"
              value={form.numAdults}
              onChange={handleChange}
              required
            />
            <Field
              label="Number of Children"
              name="numKids"
              type="number"
              value={form.numKids}
              onChange={handleChange}
            />
            <Field
              label="Children's Ages"
              name="kidsAges"
              value={form.kidsAges}
              onChange={handleChange}
            />
            <Field
              label="How many rooms or accommodations will you need?"
              name="numRooms"
              value={form.numRooms}
              onChange={handleChange}
            />
            <div className="sm:col-span-2">
              <label
                htmlFor="partyNotes"
                className="block font-body text-sm text-ink mb-1">
                Is there anything we should know about your travel party?
                (optional)
              </label>
              <textarea
                id="partyNotes"
                name="partyNotes"
                value={form.partyNotes}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-ink/20 font-body"
              />
            </div>
          </div>
        </section>

        <section>
          <SectionHeader
            number="03"
            title="Let's Talk About Your Trip"
            subtitle="Where would you like to go and when?"
            color="coral"
          />
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="destination"
                className="block font-body text-sm text-ink mb-1">
                Where would you like to go?
              </label>
              <select
                id="destination"
                name="destination"
                value={form.destination}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-ink/20 font-body">
                <option value="">Select a destination</option>
                <option value="wdw">Walt Disney World</option>
                <option value="disneyland">Disneyland</option>
                <option value="disney-cruise-line">Disney Cruise Line</option>
                <option value="aulani">Aulani</option>
                <option value="vero-beach">Disney's Vero Beach Resort</option>
                <option value="hilton-head">
                  Disney's Hilton Head Island Resort
                </option>
                <option value="adventures-by-disney">
                  Adventures by Disney
                </option>
                <option value="national-geographic">
                  National Geographic Expeditions
                </option>
                <option value="universal-orlando">Universal Orlando</option>
                <option value="universal-hollywood">
                  Universal Studios Hollywood
                </option>
                <option value="universal-kids">Universal Kids Resort</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>
            <div />
            <Field
              label="Preferred Arrival Date"
              name="arrivalDate"
              type="date"
              value={form.arrivalDate}
              onChange={handleChange}
            />
            <Field
              label="Preferred Departure Date"
              name="departureDate"
              type="date"
              value={form.departureDate}
              onChange={handleChange}
            />
            <label className="flex items-center gap-2 sm:col-span-2 font-body text-sm text-ink">
              <input
                type="checkbox"
                name="flexibleDates"
                checked={form.flexibleDates}
                onChange={handleChange}
              />
              My dates are flexible
            </label>
          </div>
        </section>

        <section className="bg-orchid/10 rounded-3xl p-8">
          <SectionHeader
            number="04"
            title="What Does Your Ideal Vacation Look Like?"
            subtitle="Tell us what matters most to you."
            color="plum"
          />
          <div className="flex flex-wrap gap-3">
            {priorityOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => togglePriority(option)}
                className={`px-4 py-2 rounded-full border text-sm font-body transition-colors ${
                  form.priorities.includes(option)
                    ? "bg-plum text-offwhite border-plum"
                    : "bg-offwhite text-ink border-ink/20"
                }`}>
                {option}
              </button>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            number="05"
            title="Let's Talk Budget"
            subtitle="Our budget helps us recommend options that make sense for your family. There's no pressure to spend more than you're comfortable with."
            color="orchid"
          />
          <Field
            label="Approximate Budget (in USD)"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="mb-6"
          />
          <p className="font-body text-sm text-ink mb-3">
            How should we consider your budget?
          </p>
          <div className="space-y-3">
            {budgetFlexibilityOptions.map((opt) => (
              <label
                key={opt.value}
                className="flex items-start gap-3 font-body text-sm text-ink">
                <input
                  type="radio"
                  name="budgetFlexibility"
                  value={opt.value}
                  checked={form.budgetFlexibility === opt.value}
                  onChange={handleChange}
                  className="mt-1"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            number="06"
            title="A Few More Details"
            subtitle="Help us make your trip even more special."
            color="teal"
          />
          <div className="grid sm:grid-cols-2 gap-6">
            <Field
              label="Celebrating something special? (optional)"
              name="specialOccasion"
              placeholder="Birthday, anniversary, honeymoon, etc."
              value={form.specialOccasion}
              onChange={handleChange}
            />
            <Field
              label="Accessibility or mobility needs? (optional)"
              name="accessibilityNeeds"
              value={form.accessibilityNeeds}
              onChange={handleChange}
            />
            <Field
              label="Dietary needs or food allergies? (optional)"
              name="dietaryNeeds"
              value={form.dietaryNeeds}
              onChange={handleChange}
              className="sm:col-span-2"
            />
            <div className="sm:col-span-2">
              <label
                htmlFor="details"
                className="block font-body text-sm text-ink mb-1">
                Anything else you'd like us to know? (optional)
              </label>
              <textarea
                id="details"
                name="details"
                value={form.details}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-ink/20 font-body"
              />
            </div>
          </div>
        </section>

        <div className="bg-plum rounded-3xl px-8 py-12 text-center">
          <h2 className="font-display text-2xl text-offwhite mb-2">
            What Happens Next?
          </h2>
          <p className="font-body text-offwhite/80 mb-6 max-w-xl mx-auto">
            Once you submit your form, your Room for Wonder travel agent will
            review your information and be in touch by the end of the next
            business day. We'll talk through any additonal details we need
            before beginning your personalized recommendations.
          </p>
          <Button type="submit" variant="primary">
            Start Planning My Vacation
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RequestQuote;
