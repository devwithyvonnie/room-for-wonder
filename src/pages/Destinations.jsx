import { useState } from "react";
import NewsletterForm from "../components/sections/NewsletterForm";

const disneyDestinations = [
  {
    id: "wdw",
    name: (
      <>
        Walt Disney World<sup className="text-[0.5em]">®</sup> Resort
      </>
    ),
    location: "Orlando, Florida",
    blurb:
      "Four theme parks, two water parks, incredible Resort hotels, dining, golf courses, and experiences come together for a vacation with countless ways to make it your own.",
    image: "/images/WDW MK 2026 Cinderella Castle New Asset 5.jpg",
    copyright: (
      <>
        <sup className="text-[0.5em]">©</sup>Disney
      </>
    ),
  },
  {
    id: "disneyland",
    name: (
      <>
        Disneyland<sup className="text-[0.5em]">®</sup> Resort
      </>
    ),
    location: "Anaheim, California",
    blurb:
      "Experience the original Disney destination with two theme parks, three Resort hotels, and plenty of magic packed into a more compact getaway.",
    image: "/images/0208ZL_0879OK_xak.jpg",
    copyright: (
      <>
        <sup className="text-[0.5em]">©</sup>Disney
      </>
    ),
  },
  {
    id: "disney-cruise-line",
    name: "Disney Cruise Line",
    location: "Multiple departure ports",
    blurb:
      "Set sail for destinations around the world with Disney entertainment, imaginative dining, family-friendly experiences, and plenty for adults to enjoy, too.",
    image: "/images/DCL_Weekends are For Wishing_Image 2.jpg",
    copyright: (
      <>
        <sup className="text-[0.5em]">©</sup>Disney Ships’ Registry: The Bahamas
      </>
    ),
  },
  {
    id: "aulani",
    name: "AULANI, A Disney Resort & Spa in Ko Olina, Hawai‘i",
    location: "Ko Olina, O‘ahu, Hawai‘i",
    blurb:
      "Experience the beauty and culture of Hawai‘i with Disney storytelling, family activities, relaxing Resort amenities, and a beautiful oceanfront setting.",
    image: "/images/0908_0006AS_R3_xak.jpg",
    copyright: (
      <>
        <sup className="text-[0.5em]">©</sup>Disney
      </>
    ),
  },
  {
    id: "adventures-by-disney",
    name: (
      <>
        Adventures by Disney<sup className="text-[0.5em]">®</sup>
      </>
    ),
    location: "Worldwide",
    blurb:
      "Explore destinations around the world through guided group vacations that combine immersive experiences, thoughtful details, and the ease of having much of the planning handled for you.",
    image: "/images/ABD Seine River Cruise.jpg",
    copyright: (
      <>
        <sup className="text-[0.5em]">©</sup>Disney, Adventures by Disney
        <sup className="text-[0.5em]">®</sup>
      </>
    ),
  },
  {
    id: "national-geographic",
    name: "National Geographic Expeditions",
    location: "Worldwide",
    blurb:
      "Discover extraordinary destinations through expertly guided trips designed around exploration, culture, wildlife, and a deeper connection to the places you visit.",
    image: "/images/NGE Tanzania Elephant.jpg",
    copyright: (
      <>
        <sup className="text-[0.5em]">©</sup>2023 National Geographic Partners,
        LLC. NATIONAL GEOGRAPHIC EXPEDITIONS and the Yellow Border Design are
        trademarks of the National Geographic Society, used under license.
      </>
    ),
  },
];

const universalDestinations = [
  {
    id: "universal-orlando",
    name: "Universal Orlando Resort",
    location: "Orlando, Florida",
    blurb:
      "Four incredible theme parks, immersive entertainment, themed hotels, and plenty of ways to enjoy a complete week-long vacation.",
    image: "/images/UOR_Globe_33A4260.jpg",
  },
  {
    id: "universal-hollywood",
    name: "Universal Studios Hollywood",
    location: "Universal City, California",
    blurb:
      "Step into favorite movies and stories with immersive attractions, entertainment, and the legendary Studio Tour in the heart of Southern California.",
    image: "/images/Screenshot 2026-09-25 at 1.14.09 PM.png",
  },
  {
    id: "universal-kids",
    name: "Universal Kids Resort",
    location: "Frisco, Texas",
    blurb:
      "Designed especially for families with young children, with kid-friendly attractions, interactive play, favorite characters, and an on-site hotel with private park access.",
    image: "/images/Screenshot 2026-09-25 at 1.16.31 PM.png",
  },
];

const categories = [
  { key: "disney", label: "Disney Destinations", data: disneyDestinations },
  {
    key: "universal",
    label: "Universal Destinations",
    data: universalDestinations,
  },
];

function DestinationCard({ dest }) {
  return (
    <div>
      <img
        src={dest.image}
        alt={dest.name}
        className="w-full aspect-video object-cover mb-4"
      />
      <p className="text-xs text-ink/50 italic mb-3">{dest.copyright}</p>
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
    <div className="px-8 max-w-6xl mx-auto">
      <p className="font-script text-4xl text-coral-deep mb-2">
        Thoughtful planning. Unforgettable vacations.
      </p>
      <h1 className="font-display text-5xl text-ink mb-8">Where We Plan</h1>

      <div className="flex gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => setActiveCategory(cat.key)}
            className={`px-6 py-3 rounded-full font-body transition-colors ${
              activeCategory === cat.key
                ? "bg-plum text-offwhite"
                : "bg-orchid/10 text-ink"
            }`}>
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-10 mb-20">
        {activeData.map((dest) => (
          <DestinationCard key={dest.id} dest={dest} />
        ))}
      </div>

      <div
        id="newsletter"
        className="bg-plum rounded-3xl px-8 py-12 text-center">
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
