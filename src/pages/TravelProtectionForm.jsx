import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../components/ui/Buttons';

const EMAILJS_SERVICE_ID = 'service_2ckjes5';
const EMAILJS_TEMPLATE_ID_PROTECTION = 'template_db3qyvs';
const EMAILJS_PUBLIC_KEY = '1fM-VwQLY8YzNxUN8';

const selectionOptions = [
  { value: 'purchasing', label: 'I am purchasing the travel protection offered with my vacation.' },
  { value: 'declining', label: 'I am declining the travel protection offered to me.' },
  { value: 'independent', label: 'I have purchased or plan to purchase travel protection independently.' },
];

function Field({ label, name, className = '', ...inputProps }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block font-body text-sm text-ink mb-1">{label}</label>
      <input
        id={name}
        name={name}
        {...inputProps}
        className="w-full px-4 py-3 rounded-xl border border-ink/20 font-body"
      />
    </div>
  );
}

function TravelProtectionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    destination: '',
    departureDate: '',
    selection: '',
    signatureName: '',
    signatureDate: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID_PROTECTION, {
      full_name: form.fullName,
      email: form.email,
      destination: form.destination,
      departure_date: form.departureDate,
      selection: selectionOptions.find((o) => o.value === form.selection)?.label || '',
      signature_name: form.signatureName,
      signature_date: form.signatureDate,
    }, EMAILJS_PUBLIC_KEY)
      .then(() => setSubmitted(true))
      .catch((err) => {
        console.error('Email failed to send:', err);
        alert('Something went wrong submitting this form — please try again or contact Room for Wonder directly to confirm your selection was received.');
      });
  }

  if (submitted) {
    return (
      <div className="px-8 py-32 max-w-2xl mx-auto text-center">
        <h1 className="font-display text-4xl text-ink mb-4">Thank you!</h1>
        <p className="font-body text-ink">Your travel protection selection has been received.</p>
      </div>
    );
  }

  return (
    <div className="px-8 py-20 max-w-3xl mx-auto">
      <h1 className="font-display text-4xl text-ink mb-4">Travel Protection Acknowledgment</h1>
      <p className="font-body text-ink mb-12">
        Travel is an investment, and unexpected circumstances can happen. Room for Wonder Travel Co. recommends that travelers consider travel protection for their vacation.
      </p>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid sm:grid-cols-2 gap-6">
          <Field label="Primary Traveler" name="fullName" value={form.fullName} onChange={handleChange} required />
          <Field label="Email Address" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} required />
          <Field label="Trip / Destination" name="destination" value={form.destination} onChange={handleChange} required />
          <Field label="Departure Date" name="departureDate" type="date" value={form.departureDate} onChange={handleChange} required />
        </div>

        <div>
          <h2 className="font-display text-xl text-plum mb-4">Travel Protection Selection</h2>
          <p className="font-body text-sm text-ink mb-3">Please select one:</p>
          <div className="space-y-3">
            {selectionOptions.map((opt) => (
              <label key={opt.value} className="flex items-start gap-3 font-body text-sm text-ink">
                <input
                  type="radio"
                  name="selection"
                  value={opt.value}
                  checked={form.selection === opt.value}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        <div className="bg-orchid/10 rounded-3xl p-8">
          <h2 className="font-display text-xl text-plum mb-4">Acknowledgment</h2>
          <p className="font-body text-sm text-ink mb-3">
            I understand that travel protection has been offered to me and that coverage, benefits, exclusions, limitations, and eligibility requirements vary by plan. I understand that it is my responsibility to review the applicable plan documents and determine whether the coverage meets my needs.
          </p>
          <p className="font-body text-sm text-ink">
            If I decline the travel protection offered to me, I understand that I am responsible for any cancellation penalties, nonrefundable amounts, or other losses that are not otherwise reimbursed by the applicable travel supplier.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <Field label="Electronic Signature (type full name)" name="signatureName" value={form.signatureName} onChange={handleChange} required />
          <Field label="Date" name="signatureDate" type="date" value={form.signatureDate} onChange={handleChange} required />
        </div>

        <Button type="submit" variant="primary">Submit</Button>
      </form>
    </div>
  );
}

export default TravelProtectionForm;