import { useState } from 'react';
import NewsletterForm from '../components/sections/NewsletterForm';

const disneyDestinations = [
  {
    name: 'Walt Disney World Resort',
    location: 'Orlando, Florida',
    blurb: 'Placeholder — four theme parks, two water parks, and endless magic in Central Florida.',
    image: 'https://placehold.co/600x400/61436F/FAF7F3?text=Walt+Disney+World',
  },
  {
    name: 'Disneyland Resort',
    location: 'Anaheim, California',
    blurb: 'Placeholder — where it all began, on the West Coast.',
    image: 'https://placehold.co/600x400/9D6FB0/FAF7F3?text=Disneyland',
  },
  {
    name: 'Disney Cruise Line',
    location: 'Multiple departure ports',
    blurb: 'Placeholder — Disney magic at sea, with itineraries around the world.',
    image: 'https://placehold.co/600x400/61436F/FAF7F3?text=Disney+Cruise+Line',
  },
  {
    name: 'Aulani, A Disney Resort & Spa',
    location: "Ko Olina, O'ahu, Hawai'i",
    blurb: 'Placeholder — a Disney resort experience in Hawai\'i.',
    image: 'https://placehold.co/600x400/9D6FB0/FAF7F3?text=Aulani',
  },
  {
    name: "Disney's Vero Beach Resort",
    location: 'Vero Beach, Florida',
    blurb: "Placeholder — a relaxed, beachfront Disney escape on Florida's Treasure Coast.",
    image: 'https://placehold.co/600x400/61436F/FAF7F3?text=Vero+Beach',
  },
  {
    name: "Disney's Hilton Head Island Resort",
    location: 'Hilton Head Island, South Carolina',
    blurb: 'Placeholder — a low-country Disney retreat.',
    image: 'https://placehold.co/600x400/9D6FB0/FAF7F3?text=Hilton+Head',
  },
  {
    name: 'Adventures by Disney',
    location: 'Worldwide',
    blurb: 'Placeholder — guided group vacations to destinations around the globe.',
    image: 'https://placehold.co/600x400/61436F/FAF7F3?text=Adventures+by+Disney',
  },
  {
    name: 'National Geographic Expeditions',
    location: 'Worldwide',
    blurb: 'Placeholder — expedition-style travel in partnership with National Geographic.',
    image: 'https://placehold.co/600x400/9D6FB0/FAF7F3?text=National+Geographic',
  },
];

const universalDestinations = [
  {
    name: 'Universal Orlando Resort',
    location: 'Orlando, Florida',
    blurb: 'Placeholder — thrilling rides and immersive worlds in Orlando.',
    image: 'https://placehold.co/600x400/087887/FAF7F3?text=Universal+Orlando',
  },
  {
    name: 'Universal Studios Hollywood',
    location: 'Universal City, California',
    blurb: 'Placeholder — the original movie-magic theme park.',
    image: 'https://placehold.co/600x400/E87870/FAF7F3?text=Universal+Hollywood',
  },
  {
    name: 'Universal Kids Resort',
    location: 'Frisco, Texas',
    blurb: 'Placeholder — a Universal destination designed for younger kids and families.',
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
      <p className="font-script text-3xl text-coral mb-2">Magically Curated Travel</p>
      <h1 className="font-display text-5xl text-ink mb-12">Where We Plan</h1>

      <DestinationGroup title="Disney Destinations" destinations={disneyDestinations} />
      <DestinationGroup title="Universal Destinations" destinations={universalDestinations} />

      <div id="newsletter" className="bg-plum rounded-3xl px-8 py-12 text-center">
  <h2 className="font-display text-3xl text-offwhite mb-2">
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

export default Destinations;