import { useState } from 'react';
import NewsletterForm from '../components/sections/NewsletterForm';

const disneyDestinations = [
  {
    name: 'Walt Disney World Resort',
    location: 'Orlando, Florida',
    blurb: 'Four theme parks, two water parks, incredible resorts, dining, and experiences come together for a vacation with countless ways to make it your own.',
    image: '/images/Screenshot 2026-09-25 at 1.18.48 PM.png',
  },
  {
    name: 'Disneyland Resort',
    location: 'Anaheim, California',
    blurb: 'Experience the original Disney destination with two theme parks, three Disney Resort hotels, and plenty of magic packed into a more compact getaway.',
    image: '/images/Screenshot 2026-09-25 at 1.21.50 PM.png',
  },
  {
    name: 'Disney Cruise Line',
    location: 'Multiple departure ports',
    blurb: 'Set sail for destinations around the world with Disney entertainment, imaginative dining, family-friendly experiences, and plenty for adults to enjoy, too.',
    image: '/images/Screenshot 2026-09-25 at 1.23.01 PM.png',
  },
  {
    name: 'Aulani, A Disney Resort & Spa',
    location: "Ko Olina, O'ahu, Hawai'i",
    blurb: 'Experience the beauty and culture of Hawaiʻi with Disney storytelling, family activities, relaxing resort amenities, and a beautiful oceanfront setting.',
    image: '/images/Screenshot 2026-09-25 at 1.24.07 PM.png',
  },
  {
    name: "Disney's Vero Beach Resort",
    location: 'Vero Beach, Florida',
    blurb: "Enjoy a relaxed beachfront escape on Florida’s Atlantic Coast with family activities, recreation, and plenty of time to slow down together.",
    image: '/images/Screenshot 2026-09-25 at 1.32.40 PM.png',
  },
  {
    name: "Disney's Hilton Head Island Resort",
    location: 'Hilton Head Island, South Carolina',
    blurb: 'Unwind in a charming Lowcountry setting with family activities, outdoor recreation, and easy access to the beaches of Hilton Head Island.',
    image: '/images/Screenshot 2026-09-25 at 1.30.49 PM.png',
  },
  {
    name: 'Adventures by Disney',
    location: 'Worldwide',
    blurb: 'Explore destinations around the world through guided vacations that combine immersive experiences, thoughtful details, and the ease of having much of the planning handled for you.',
    image: '/images/Screenshot 2026-09-25 at 1.26.51 PM.png',
  },
  {
    name: 'National Geographic Expeditions',
    location: 'Worldwide',
    blurb: 'Discover extraordinary destinations through expertly guided trips designed around exploration, culture, wildlife, and a deeper connection to the places you visit.',
    image: '/images/Screenshot 2026-09-25 at 1.28.11 PM.png',
  },
];

const universalDestinations = [
  {
    name: 'Universal Orlando Resort',
    location: 'Orlando, Florida',
    blurb: 'Four incredible theme parks, immersive entertainment, themed hotels, and plenty of ways to enjoy a complete week-long vacation.',
    image: '/images/UOR_Globe_33A4260.jpg',
  },
  {
    name: 'Universal Studios Hollywood',
    location: 'Universal City, California',
    blurb: 'Step into favorite movies and stories with immersive attractions, entertainment, and the legendary Studio Tour in the heart of Southern California.',
    image: '/images/Screenshot 2026-09-25 at 1.14.09 PM.png',
  },
  {
    name: 'Universal Kids Resort',
    location: 'Frisco, Texas',
    blurb: 'Designed especially for families with young children, with kid-friendly attractions, interactive play, favorite characters, and an on-site hotel with private park access.',
    image: '/images/Screenshot 2026-09-25 at 1.16.31 PM.png',
  },
];

const categories = [
  { key: 'disney', label: 'Disney Destinations', data: disneyDestinations },
  { key: 'universal', label: 'Universal Destinations', data: universalDestinations },
];

function DestinationCard({ dest }) {
  return (
    <div>
      <img src={dest.image} alt={dest.name} className="w-full aspect-video object-cover rounded-3xl mb-4" />
      <h3 className="font-display text-2xl text-ink">{dest.name}</h3>
      <p className="font-body text-sm text-plum mb-2">{dest.location}</p>
      <p className="font-body text-ink">{dest.blurb}</p>
    </div>
  );
}

function Destinations() {
  const [activeCategory, setActiveCategory] = useState(categories[0].key);
  const activeData = categories.find((c) => c.key === activeCategory).data;

  return (
    <div className="px-8 py-20 max-w-6xl mx-auto">
      <p className="font-script text-4xl text-coral-deep mb-2">Thoughtful planning. Unforgettable vacations.</p>
      <h1 className="font-display text-5xl text-ink mb-8">Where We Plan</h1>

      <div className="flex gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => setActiveCategory(cat.key)}
            className={`px-6 py-3 rounded-full font-body transition-colors ${
              activeCategory === cat.key
                ? 'bg-plum text-offwhite'
                : 'bg-orchid/10 text-ink'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-10 mb-20">
        {activeData.map((dest) => (
          <DestinationCard key={dest.name} dest={dest} />
        ))}
      </div>

      <div id="newsletter" className="bg-plum rounded-3xl px-8 py-12 text-center">
        <h2 className="font-display text-3xl text-offwhite mb-2">More destinations coming soon</h2>
        <p className="font-body text-offwhite/80 mb-6">Be the first to know when we expand beyond Disney and Universal.</p>
        <NewsletterForm />
      </div>
    </div>
  );
}

export default Destinations;