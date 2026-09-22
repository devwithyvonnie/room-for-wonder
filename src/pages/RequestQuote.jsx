import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { agents } from "../data/agents";
import Button from "../components/ui/Buttons";
import emailjs from "@emailjs/browser";

// near your other constants
const EMAILJS_SERVICE_ID = "service_2ckjes5";
const EMAILJS_TEMPLATE_ID = "template_xdzmczt";
const EMAILJS_PUBLIC_KEY = "1fM-VwQLY8YzNxUN8";

const initialForm = {
  parentName: "",
  email: "",
  phone: "",
  numAdults: "",
  numKids: "",
  kidsAges: "",
  destination: "",
  travelDates: "",
  flexibleDates: false,
  budget: "",
  details: "",
  hearAboutUs: "",
};

function RequestQuote() {
  const [searchParams] = useSearchParams();
  const preselectedAgent = searchParams.get("agent") || agents[0].id;

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    ...initialForm,
    agentId: preselectedAgent,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
          num_adults: form.numAdults,
          num_kids: form.numKids,
          kids_ages: form.kidsAges,
          destination: form.destination,
          travel_dates: form.travelDates,
          flexible_dates: form.flexibleDates ? "Yes" : "No",
          budget: form.budget,
          details: form.details,
          hear_about_us: form.hearAboutUs,
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
        <p className="font-script text-3xl text-coral mb-4">Chapter Begun</p>
        <h1 className="font-display text-4xl text-ink mb-4">
          We've got your story started
        </h1>
        <p className="font-body text-ink">
          Thank you, {form.parentName || "friend"} — we'll be in touch within
          1–2 business days to start planning.
        </p>
      </div>
    );
  }

  return (
    <div className="px-8 py-20 max-w-3xl mx-auto">
      <p className="font-script text-3xl text-coral mb-2">Let's Begin</p>
      <h1 className="font-display text-5xl text-ink mb-12">Request a Quote</h1>

      <form onSubmit={handleSubmit} className="space-y-16">
        <section>
          <h2 className="font-display text-2xl text-plum mb-6">Your Info</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Field
              label="Your name"
              name="parentName"
              value={form.parentName}
              onChange={handleChange}
              required
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Field
              label="Phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
            />
            <Field
              label="How did you hear about us?"
              name="hearAboutUs"
              value={form.hearAboutUs}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-body text-sm text-ink mb-1">
              Who would you like to work with?
            </label>
            <select
              name="agentId"
              value={form.agentId}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-ink/20 font-body">
              {agents.map((agent) => (
                <option key={agent.id} value={agent.id}>
                  {agent.name}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl text-plum mb-6">Your Party</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Field
              label="Number of adults"
              name="numAdults"
              type="number"
              value={form.numAdults}
              onChange={handleChange}
              required
            />
            <Field
              label="Number of children"
              name="numKids"
              type="number"
              value={form.numKids}
              onChange={handleChange}
            />
            <Field
              label="Children's ages"
              name="kidsAges"
              value={form.kidsAges}
              onChange={handleChange}
              className="sm:col-span-2"
            />
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl text-plum mb-6">Your Trip</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-body text-sm text-ink mb-1">
                Destination
              </label>
              <select
                name="destination"
                value={form.destination}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-ink/20 font-body">
                <option value="">Select one</option>
                <option value="wdw">Walt Disney World</option>
<option value="disneyland">Disneyland</option>
<option value="disney-cruise-line">Disney Cruise Line</option>
<option value="aulani">Aulani</option>
<option value="vero-beach">Disney's Vero Beach Resort</option>
<option value="hilton-head">Disney's Hilton Head Island Resort</option>
<option value="adventures-by-disney">Adventures by Disney</option>
<option value="national-geographic">National Geographic Expeditions</option>
<option value="universal-orlando">Universal Orlando</option>
<option value="universal-hollywood">Universal Studios Hollywood</option>
<option value="universal-kids">Universal Kids Resort</option>
<option value="not-sure">Not sure yet</option>
              </select>
            </div>
            <Field
              label="Preferred travel dates"
              name="travelDates"
              value={form.travelDates}
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
            <Field
              label="Approximate budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="sm:col-span-2"
            />
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl text-plum mb-6">
            Anything Else?
          </h2>
          <textarea
            name="details"
            value={form.details}
            onChange={handleChange}
            rows={5}
            placeholder="Special occasions, accessibility needs, must-do experiences..."
            className="w-full px-4 py-3 rounded-xl border border-ink/20 font-body"
          />
        </section>

        <Button type="submit" variant="primary">
          Send My Request
        </Button>
      </form>
    </div>
  );
}

function Field({ label, className = "", ...inputProps }) {
  return (
    <div className={className}>
      <label className="block font-body text-sm text-ink mb-1">{label}</label>
      <input
        {...inputProps}
        className="w-full px-4 py-3 rounded-xl border border-ink/20 font-body"
      />
    </div>
  );
}

export default RequestQuote;
