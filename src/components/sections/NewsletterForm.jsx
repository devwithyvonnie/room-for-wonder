import { useState } from 'react';
import Button from '../ui/Buttons';

function NewsletterForm({ compact = false }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className={`font-body ${compact ? 'text-sm text-offwhite/80' : 'text-offwhite'}`}>
        Thanks — we'll be in touch!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex gap-3 ${compact ? 'max-w-xs' : 'flex-col sm:flex-row justify-center max-w-md mx-auto'}`}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className={`flex-1 rounded-full font-body ${compact ? 'px-4 py-2 text-sm' : 'px-4 py-3'}`}
      />
      <Button type="submit" variant="secondary">
        {compact ? 'Sign Up' : 'Notify Me'}
      </Button>
    </form>
  );
}

export default NewsletterForm;