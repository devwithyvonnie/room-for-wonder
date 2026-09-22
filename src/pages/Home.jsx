import Hero from '../components/sections/Hero';
import ChapterSpread from '../components/templates/ChapterSpread';
import Button from '../components/ui/Buttons';

function Home() {
  return (
    <>
      <Hero />

      <ChapterSpread
        chapterLabel="Chapter One"
        heading="Why plan with an advisor?"
        body="Placeholder — the case for using a travel advisor instead of booking it yourself: expertise, time saved, no extra cost to the client."
        image={{ src: 'https://placehold.co/600x400/61436F/FAF7F3?text=Placeholder', alt: 'Placeholder image' }}
        imageSide="left"
      />

      <ChapterSpread
        chapterLabel="Chapter Two"
        heading="Where the story takes you"
        body="Placeholder — a teaser of destinations: Disney parks, cruises, all-inclusive resorts."
        image={{ src: 'https://placehold.co/600x400/61436F/FAF7F3?text=Placeholder', alt: 'Placeholder image' }}
        imageSide="right"
      />

      <section className="px-8 py-20 text-center bg-plum">
        <h2 className="font-display text-4xl text-offwhite mb-4">
          Ready to write your family's next chapter?
        </h2>
        <Button variant="secondary">Request a Quote</Button>
      </section>
    </>
  );
}

export default Home;