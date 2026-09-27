function ChapterSpread({ image, chapterLabel, heading, body, imageSide }) {
  const pageSetup = `flex flex-col items-center gap-8 ${
    imageSide === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
  }`;

  return (
    <div className={pageSetup}>
      <div className="w-full md:w-1/2">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full rounded-3xl object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 px-4 md:px-8">
        <p className="font-script text-2xl text-coral-deep mb-2">{chapterLabel}</p>
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">{heading}</h2>
        <p className="font-body text-ink first-letter:font-display first-letter:text-6xl first-letter:text-plum first-letter:mr-2 first-letter:float-left">
          {body}
        </p>
      </div>
    </div>
  );
}

export default ChapterSpread;