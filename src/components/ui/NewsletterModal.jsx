import { useEffect } from 'react';
import NewsletterForm from '../sections/NewsletterForm';

function NewsletterModal({ open, onClose }) {
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') onClose();
    }
    if (open) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-ink/60 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="bg-plum rounded-3xl px-8 py-12 text-center max-w-md w-full relative"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-offwhite text-xl"
        >
          ✕
        </button>
        <h2 id="newsletter-modal-title" className="font-display text-3xl text-offwhite mb-2">
          More destinations coming soon
        </h2>
        <p className="font-body text-offwhite/80 mb-6">
          Be the first to know when we expand beyond Disney and Universal.
        </p>
        <NewsletterForm />
      </div>
    </div>
  );
}

export default NewsletterModal;