import { motion } from 'framer-motion';

const reveal = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)',
    transition: { duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] } },
});

const COMPANIES = [
  {
    name:     'Globetech Group',
    location: 'Dubai, UAE',
    role:     'CEO',
    sector:   'Shipping & Marine Technical Services',
    est:      '1998',
    website:  'globetechgroup.net',
    url:      'https://www.globetechgroup.net/',
  },
  {
    name:     'Valad Infotech Solutions',
    location: 'Mumbai, India',
    role:     'Founder & Chairman',
    sector:   'Marine IT & IT-Enabled Services',
    est:      '2006',
    website:  'valadinfotech.com',
    url:      'https://www.valadinfotech.com/',
  },
  {
    name:     'Globetech Group Limited',
    location: 'British Virgin Islands',
    role:     'Owner',
    sector:   'Marine Investment & Shipping Assets',
    est:      '2008',
    website:  null,
    url:      null,
  },
];

export default function Companies() {
  return (
    <section
      id="companies"
      className="bg-[#f7f5f0] dark:bg-[#141414] py-24 lg:py-36 transition-colors duration-300"
      aria-label="Ventures section"
    >
      <div className="max-w-6xl mx-auto px-8 sm:px-12">

        {/* Section label */}
        <motion.div
          variants={reveal(0)}
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="font-body text-[10px] text-[#c9a84c] tracking-[0.5em] uppercase font-semibold">02</span>
          <div className="h-px w-10 bg-[#c9a84c] opacity-50" />
          <span className="font-body text-[10px] text-[#6b6b6b] dark:text-white/50 tracking-[0.4em] uppercase">Ventures</span>
        </motion.div>

        {/* Section heading */}
        <motion.div
          variants={reveal(0.1)}
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-14 max-w-xl"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-light text-[#1a1a1a] dark:text-white leading-[1.1]">
            A Portfolio Built Over
          </h2>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold italic text-[#c9a84c] leading-[1.15]">
            Four Decades.
          </h2>
        </motion.div>

        {/* Thin divider */}
        <div className="h-px bg-[#ddd9d0] dark:bg-[#2a2a2a] mb-0" />

        {/* Company list */}
        <div className="flex flex-col">
          {COMPANIES.map((co, i) => (
            <motion.div
              key={co.name}
              variants={reveal(0.12 + i * 0.1)}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="group border-b border-[#ddd9d0] dark:border-[#2a2a2a] py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12"
            >
              {/* Est. year — decorative, left-most */}
              <div className="hidden lg:flex items-start pt-1">
                <span className="font-display text-5xl font-light text-[#c5c0b5] dark:text-[#3a3a3a] select-none leading-none">
                  {co.est}
                </span>
              </div>

              {/* Company name + location (3 cols) */}
              <div className="lg:col-span-2 flex flex-col gap-2">
                <h3 className="font-display text-2xl sm:text-3xl font-light text-[#1a1a1a] dark:text-white group-hover:text-[#c9a84c] transition-colors duration-300 leading-snug">
                  {co.name}
                </h3>
                <p className="font-body text-[11px] text-[#6b6b6b] dark:text-white/45 tracking-[0.25em] uppercase">
                  {co.location}
                </p>
                {/* Est. on mobile */}
                <p className="lg:hidden font-body text-[10px] text-[#9a9a9a] dark:text-white/30 tracking-[0.2em] uppercase mt-1">
                  Est. {co.est}
                </p>
              </div>

              {/* Role + sector + website (2 cols) */}
              <div className="lg:col-span-2 flex flex-col gap-3 lg:justify-center">
                <div className="flex items-center gap-3">
                  <div className="h-px w-5 bg-[#c9a84c] opacity-70 flex-shrink-0" />
                  <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#c9a84c]">
                    {co.role}
                  </p>
                </div>
                <p className="font-body text-[14px] text-[#4a4a4a] dark:text-white/65 font-light leading-6">
                  {co.sector}
                </p>
                {co.website ? (
                  <a
                    href={co.url}
                    target="_blank" rel="noopener noreferrer"
                    className="font-body text-[11px] tracking-[0.18em] uppercase text-[#888] dark:text-white/35 hover:text-[#c9a84c] transition-colors duration-200 mt-1"
                  >
                    {co.website} ↗
                  </a>
                ) : (
                  <p className="font-body text-[11px] tracking-[0.18em] uppercase text-[#aaa] dark:text-white/25 mt-1">
                    Private Entity
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vessel Portfolio */}
        <motion.div
          variants={reveal(0.45)}
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-16 pt-14 border-t border-[#ddd9d0] dark:border-[#2a2a2a]"
        >
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#6b6b6b] dark:text-white/50 mb-8">
            Vessel Portfolio
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: '/imgs/vessel-atlantica-server.jpg', name: 'Atlantica Server' },
              { src: '/imgs/vessel-baltic-bay.jpg',       name: 'Baltic Bay' },
              { src: '/imgs/vessel-dsi-drammen.jpg',      name: 'DSI Drammen' },
              { src: '/imgs/vessel-carolina.jpg',         name: 'Chemtrans Carolina' },
            ].map(({ src, name }) => (
              <div key={name} className="flex flex-col gap-2">
                <div className="aspect-[4/3] overflow-hidden bg-[#e8e4db] dark:bg-[#2a2a2a]">
                  <img
                    src={src}
                    alt={name}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <p className="font-body text-[10px] tracking-[0.18em] uppercase text-[#6b6b6b] dark:text-white/45">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
