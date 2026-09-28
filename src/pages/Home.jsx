import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import ChapterSpread from '../components/templates/ChapterSpread';
import Button from '../components/ui/Buttons';

function Home() {
  return (
    <>
      <Hero />

      <ChapterSpread
        chapterLabel="Chapter One"
        heading="Planning should feel exciting, too."
        body="Planning a vacation should be part of the excitement, not another thing on your never-ending to-do list. 
        Your Room for Wonder travel agent will help you sort through the options, make thoughtful recommendations based 
        on what matters to your family, and keep track of the details along the way. You’ll stay involved in the decisions 
        that matter to you, while we help make the rest feel easier."
        image={{ src: '/images/C9B87F40-AFA2-441F-B408-8A84F5055663_1_105_c.jpeg', alt: 'Guest with hands holding Minnie Mouse Ears in front of Celebrate 70 years at Disneyland sign' }}
        imageSide="left"
      />

      <ChapterSpread
        chapterLabel="Chapter Two"
        heading="Where will wonder take you?"
        body="From magical theme park vacations to relaxing days at sea, your next vacation can look completely different 
        from the last. Room for Wonder specializes in Disney Travel Company packages, Universal destinations, and cruises, 
        with personalized planning designed around the way your family wants to travel."
        image={{ src: '/images/8089D729-9E38-4BA2-8838-C419BC40370F_1_105_c.jpeg', alt: 'Guests standing with Vikings while touching a dragon' }}
        imageSide="right"
      />

      <section className="px-8 py-20 text-center bg-plum" style={{marginTop: "100px"}}>
        <h2 className="font-display text-4xl text-offwhite mb-4">
          Ready to make room for wonder?
        </h2>
        <Link to="/request-a-quote">
        <Button variant="primary">Plan Your Vacation with Us</Button>
        </Link>
      </section>
    </>
  );
}

export default Home;