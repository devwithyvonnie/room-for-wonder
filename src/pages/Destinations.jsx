import { useState } from 'react';
import NewsletterForm from '../components/sections/NewsletterForm';

const disneyDestinations = [
  {
    name: 'Walt Disney World Resort',
    location: 'Orlando, Florida',
    blurb: 'Four theme parks, two water parks, incredible resorts, dining, and experiences come together for a vacation with countless ways to make it your own.',
    image: 'https://placehold.co/600x400/61436F/FAF7F3?text=Walt+Disney+World',
  },
  {
    name: 'Disneyland Resort',
    location: 'Anaheim, California',
    blurb: 'Experience the original Disney destination with two theme parks, three Disney Resort hotels, and plenty of magic packed into a more compact getaway.',
    image: 'https://placehold.co/600x400/9D6FB0/FAF7F3?text=Disneyland',
  },
  {
    name: 'Disney Cruise Line',
    location: 'Multiple departure ports',
    blurb: 'Set sail for destinations around the world with Disney entertainment, imaginative dining, family-friendly experiences, and plenty for adults to enjoy, too.',
    image: 'https://placehold.co/600x400/61436F/FAF7F3?text=Disney+Cruise+Line',
  },
  {
    name: 'Aulani, A Disney Resort & Spa',
    location: "Ko Olina, O'ahu, Hawai'i",
    blurb: 'Experience the beauty and culture of Hawaiʻi with Disney storytelling, family activities, relaxing resort amenities, and a beautiful oceanfront setting.',
    image: 'https://placehold.co/600x400/9D6FB0/FAF7F3?text=Aulani',
  },
  {
    name: "Disney's Vero Beach Resort",
    location: 'Vero Beach, Florida',
    blurb: "Enjoy a relaxed beachfront escape on Florida’s Atlantic Coast with family activities, recreation, and plenty of time to slow down together.",
    image: 'https://placehold.co/600x400/61436F/FAF7F3?text=Vero+Beach',
  },
  {
    name: "Disney's Hilton Head Island Resort",
    location: 'Hilton Head Island, South Carolina',
    blurb: 'Unwind in a charming Lowcountry setting with family activities, outdoor recreation, and easy access to the beaches of Hilton Head Island.',
    image: 'https://placehold.co/600x400/9D6FB0/FAF7F3?text=Hilton+Head',
  },
  {
    name: 'Adventures by Disney',
    location: 'Worldwide',
    blurb: 'Explore destinations around the world through guided vacations that combine immersive experiences, thoughtful details, and the ease of having much of the planning handled for you.',
    image: 'https://placehold.co/600x400/61436F/FAF7F3?text=Adventures+by+Disney',
  },
  {
    name: 'National Geographic Expeditions',
    location: 'Worldwide',
    blurb: 'Discover extraordinary destinations through expertly guided trips designed around exploration, culture, wildlife, and a deeper connection to the places you visit.',
    image: 'https://placehold.co/600x400/9D6FB0/FAF7F3?text=National+Geographic',
  },
];

const universalDestinations = [
  {
    name: 'Universal Orlando Resort',
    location: 'Orlando, Florida',
    blurb: 'Four incredible theme parks, immersive entertainment, themed hotels, and plenty of ways to enjoy a complete week-long vacation.',
    image: 'https://placehold.co/600x400/087887/FAF7F3?text=Universal+Orlando',
  },
  {
    name: 'Universal Studios Hollywood',
    location: 'Universal City, California',
    blurb: 'Step into favorite movies and stories with immersive attractions, entertainment, and the legendary Studio Tour in the heart of Southern California.',
    image: 'https://placehold.co/600x400/E87870/FAF7F3?text=Universal+Hollywood',
  },
  {
    name: 'Universal Kids Resort',
    location: 'Frisco, Texas',
    blurb: 'Designed especially for families with young children, with kid-friendly attractions, interactive play, favorite characters, and an on-site hotel with private park access.',
    image: 'https://placehold.co/600x400/087887/FAF7F3?text=Universal+Kids+Resort',
  },
];

function DestinationGroup({ title, destinations }) {
  return (
    <div className="mb-20">
      <h2 className="font-display text-3xl text-plum mb-8">{title}</h2>
      <div className="grid sm:grid-cols-2 gap-10">
        {destinations.map((dest) => (
          <div key={dest.name}>
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full aspect-video object-cover rounded-3xl mb-4"
            />
            <h3 className="font-display text-2xl text-ink">{dest.name}</h3>
            <p className="font-body text-sm text-plum mb-2">{dest.location}</p>
            <p className="font-body text-ink">{dest.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Destinations() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="px-8 py-20 max-w-6xl mx-auto">
      <p className="font-script text-3xl text-coral-deep mb-2">Thoughtful planning. Unforgettable vacations.</p>
      <h1 className="font-display text-5xl text-ink mb-12">Where We Plan</h1>

      <DestinationGroup title="Disney Destinations" destinations={disneyDestinations} />
      <DestinationGroup title="Universal Destinations" destinations={universalDestinations} />

      <div id="newsletter" className="bg-plum rounded-3xl px-8 py-12 text-center">
  <h2 className="font-display text-3xl text-offwhite mb-2">
    More destinations coming soon
  </h2>
  <p className="font-body text-offwhite/80 mb-6">
    We’re thoughtfully expanding where we plan. Join our email list to be the first to hear about new cruise lines, resorts, and vacation experiences.
  </p>
  <NewsletterForm />
</div>
    </div>
  );
}

export default Destinations;