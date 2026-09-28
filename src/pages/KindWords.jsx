import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Buttons';

const testimonials = [
  { quote: 'Placeholder — a glowing review about how stress-free the planning process was.', family: 'The Placeholder Family', trip: 'Walt Disney World, 2025' },
  { quote: 'Placeholder — a review mentioning a specific thoughtful touch the advisor arranged.', family: 'The Sample Family', trip: 'Universal Orlando, 2025' },
  { quote: 'Placeholder — a review about feeling taken care of throughout the trip.', family: 'The Example Family', trip: 'Disneyland, 2024' },
];

const accentColors = ['border-t-plum', 'border-t-teal', 'border-t-coral'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function KindWords() {
  return (
    <div className="px-8 py-20 max-w-6xl mx-auto">
      <p className="font-script text-4xl text-coral-deep mb-2">From our guests</p>
      <h1 className="font-display text-5xl text-ink mb-12">Notes from happy travelers</h1>

      <motion.div
        className="grid md:grid-cols-3 gap-8 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.family}
            variants={cardVariants}
            className={`bg-orchid/10 rounded-3xl p-8 border-t-4 ${accentColors[i % accentColors.length]}`}
          >
            <span className="font-display text-6xl text-orchid/30 leading-none block mb-2">"</span>
            <p className="font-body text-ink mb-6 italic -mt-4">{t.quote}</p>
            <p className="font-display text-lg text-plum">{t.family}</p>
            <p className="font-body text-sm text-ink/70">{t.trip}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="bg-plum rounded-3xl px-8 py-12 text-center">
        <h2 className="font-display text-3xl text-offwhite mb-6">Ready to start your own story?</h2>
        <Link to="/request-a-quote">
          <Button variant="primary">Request a Quote</Button>
        </Link>
      </div>
    </div>
  );
}

export default KindWords;