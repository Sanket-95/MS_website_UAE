import { motion } from 'framer-motion';

const reveal = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)',
    transition: { duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] } },
});

const CLUBS = [
  { name: 'Emirates Golf Club',             location: 'Dubai, UAE' },
  { name: 'The Bombay Presidency Golf Club', location: 'Mumbai, India' },
];

export default function Lifestyle() {
  return (
    <section
      id="lifestyle"
      className="bg-white dark:bg-[#0e0e0e] py-24 lg:py-36 transition-colors duration-300"
      aria-label="Lifestyle section"
    >
      <div className="max-w-6xl mx-auto px-8 sm:px-12">

        {/* Section label */}
        <motion.div
          variants={reveal(0)}
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="font-body text-[10px] text-[#c9a84c] tracking-[0.5em] uppercase font-semibold">03</span>
          <div className="h-px w-10 bg-[#c9a84c] opacity-50" />
          <span className="font-body text-[10px] text-[#6b6b6b] dark:text-white/50 tracking-[0.4em] uppercase">Lifestyle</span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: text */}
          <div>
            <motion.div
              variants={reveal(0.08)}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="mb-12"
            >
              <h2 className="font-display text-4xl sm:text-5xl font-light text-[#1a1a1a] dark:text-white leading-[1.1]">
                Beyond
              </h2>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold italic text-[#c9a84c] leading-[1.15]">
                Business.
              </h2>
            </motion.div>

            {/* Sport */}
            <motion.div
              variants={reveal(0.16)}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="mb-10"
            >
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#6b6b6b] dark:text-white/45 mb-4">
                Sport &amp; Recreation
              </p>
              <div className="flex flex-col gap-3">
                {['Golf', 'Yoga', 'Meditation'].map((activity) => (
                  <div key={activity} className="flex items-center gap-4">
                    <div className="w-px h-8 bg-[#c9a84c] opacity-60" />
                    <p className="font-display text-2xl font-light text-[#1a1a1a] dark:text-white">{activity}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Club memberships */}
            <motion.div
              variants={reveal(0.24)}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#6b6b6b] dark:text-white/45 mb-5">
                Club Memberships
              </p>

              <div className="flex flex-col border-t border-[#e8e4db] dark:border-[#2a2a2a]">
                {CLUBS.map((club) => (
                  <div key={club.name}
                    className="py-5 border-b border-[#e8e4db] dark:border-[#2a2a2a]">
                    <p className="font-display text-xl font-light text-[#1a1a1a] dark:text-white leading-snug mb-1">
                      {club.name}
                    </p>
                    <p className="font-body text-[11px] text-[#6b6b6b] dark:text-white/45 tracking-[0.22em] uppercase">
                      {club.location}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Philanthropy */}
            <motion.div
              variants={reveal(0.32)}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="mt-10"
            >
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#6b6b6b] dark:text-white/45 mb-5">
                Philanthropy
              </p>
              <div className="flex flex-col border-t border-[#e8e4db] dark:border-[#2a2a2a]">
                <div className="py-5 border-b border-[#e8e4db] dark:border-[#2a2a2a]">
                  <a
                    href="https://tranquilcharity.org/"
                    target="_blank" rel="noopener noreferrer"
                    className="font-display text-xl font-light text-[#1a1a1a] dark:text-white hover:text-[#c9a84c] transition-colors duration-200 leading-snug mb-1 block"
                  >
                    SAMPARC Tranquill Charity
                  </a>
                  <p className="font-body text-[11px] text-[#6b6b6b] dark:text-white/45 tracking-[0.22em] uppercase">
                    tranquilcharity.org ↗
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: golf photos */}
          <motion.div
            variants={reveal(0.2)}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="mt-12 aspect-[3/4] overflow-hidden">
              <img
                src="/imgs/golf-1.jpg"
                alt="Manoj Satija at Dubai Golf Championship 2025"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/imgs/golf-2.jpg"
                alt="Manoj Satija celebrating at the golf course"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
