import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const titles = {
  '/': 'Room for Wonder | Family Vacation & Disney Travel Planning',
  '/how-it-works': 'How It Works | Room for Wonder',
  '/about': 'About | Room for Wonder',
  '/team': 'Meet the Team | Room for Wonder',
  '/destinations': 'Destinations | Room for Wonder',
  '/kind-words': 'Kind Words | Room for Wonder',
  '/faqs': 'FAQs | Room for Wonder',
  '/request-a-quote': 'Request a Quote | Room for Wonder',
  '/payment-authorization-terms': 'Payment Authorization Terms | Room for Wonder',
  '/travel-protection-acknowledgment': 'Travel Protection Acknowledgment | Room for Wonder',
};

function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = titles[pathname] || 'Room for Wonder';
  }, [pathname]);

  return null;
}

export default PageTitle;