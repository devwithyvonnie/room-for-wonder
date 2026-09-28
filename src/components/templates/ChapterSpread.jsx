import { motion } from 'framer-motion';

function ChapterSpread({ image, chapterLabel, heading, body, imageSide }) {
  const pageSetup = `flex flex-col items-center gap-8 ${
    imageSide === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
  }`;

  return (
    <motion.div
      className={pageSetup}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-full md:w-1/2">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full rounded-3xl object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 px-4 md:px-8">
        <p className="font-script text-5xl text-coral-deep mb-2 flex items-center gap-2">
          {chapterLabel}
          <span className="text-lg animate-pulse">✨</span>
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-ink mb-4">{heading}</h2>
        <p className="font-body text-ink first-letter:font-display first-letter:text-6xl first-letter:text-plum first-letter:mr-2 first-letter:float-left" style={{paddingBottom: "50px"}}>
          {body}
        </p>
      </div>
    </motion.div>
  );
}

export default ChapterSpread;