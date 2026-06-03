import { motion } from 'framer-motion';

const reveal = (delay = 0) => ({
  hidden:  { opacity: 0, y: 22, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)',
    transition: { duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] } },
});

const KEY_FACTS = [
  { label: 'Nationality', value: 'British National' },
  { label: 'Based In',    value: 'Dubai, UAE' },
  { label: 'Languages',   value: 'English · Hindi' },
];

const STATS = [
  { value: '25+',  label: 'Years of Industry Experience' },
  { value: '3',    label: 'Global Companies' },
  { value: '1998', label: 'Globetech Founded' },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white dark:bg-[#0e0e0e] py-24 lg:py-36 transition-colors duration-300"
      aria-label="About section"
    >
      <div className="max-w-6xl mx-auto px-8 sm:px-12">

        {/* Section label */}
        <motion.div
          variants={reveal(0)}
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="font-body text-[10px] text-[#c9a84c] tracking-[0.5em] uppercase font-semibold">01</span>
          <div className="h-px w-10 bg-[#c9a84c] opacity-50" />
          <span className="font-body text-[10px] text-[#6b6b6b] dark:text-white/50 tracking-[0.4em] uppercase">About</span>
        </motion.div>

        {/* Editorial heading — compact two-line, full width */}
        <motion.div
          variants={reveal(0.08)}
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-14 max-w-3xl"
        >
          <h2 className="font-display text-5xl sm:text-6xl lg:text-[4.5rem] font-light text-[#1a1a1a] dark:text-white leading-[1.08]">
            Marine Chief Engineer
          </h2>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-[4.5rem] font-semibold italic text-[#c9a84c] leading-[1.12]">
            by Qualification.
          </h2>
        </motion.div>

        {/* Thin divider */}
        <div className="h-px bg-[#e8e4db] dark:bg-[#2a2a2a] mb-14" />

        {/* Two-column: bio (left, wider) + facts/stats (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left: bio paragraphs (2 / 3 columns) */}
          <motion.div
            variants={reveal(0.16)}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <p className="font-body text-[15px] text-[#3a3a3a] dark:text-white/75 leading-[1.9] font-light">
              An industry leader by experience, spanning for almost four decades. Manoj Satija
              established Globetech Group in Dubai in 1998 — a Shipping &amp; Marine Technical
              Services company that has grown into a globally recognised enterprise.
            </p>
            <p className="font-body text-[15px] text-[#3a3a3a] dark:text-white/75 leading-[1.9] font-light">
              In 2006, he founded Valad Infotech Solutions in Mumbai — delivering Marine IT
              &amp; IT-Enabled Services to the global shipping industry. In 2008, he established
              Globetech Group Limited in the British Virgin Islands for Marine Investment
              and Shipping Assets.
            </p>
            <p className="font-body text-[15px] text-[#3a3a3a] dark:text-white/75 leading-[1.9] font-light">
              Beyond his business ventures, he maintains a diversified investment portfolio
              spanning real estate across the United Kingdom, India, and the United Arab Emirates.
            </p>
          </motion.div>

          {/* Right: key facts + stats (1 / 3 columns) */}
          <motion.div
            variants={reveal(0.24)}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-10"
          >
            {/* Key facts panel */}
            <div className="flex flex-col border-t border-[#e8e4db] dark:border-[#2a2a2a]">
              {KEY_FACTS.map(({ label, value }) => (
                <div key={label} className="py-4 border-b border-[#e8e4db] dark:border-[#2a2a2a]">
                  <p className="font-body text-[9px] tracking-[0.35em] uppercase text-[#999] dark:text-white/35 mb-1">
                    {label}
                  </p>
                  <p className="font-body text-sm text-[#1a1a1a] dark:text-white/85 font-light">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats — inline value + label */}
            <div className="flex flex-col gap-5">
              {STATS.map(({ value, label }) => (
                <div key={label} className="flex items-baseline gap-3">
                  <span className="font-display text-4xl font-light text-[#c9a84c] flex-shrink-0">
                    {value}
                  </span>
                  <span className="font-body text-[10px] tracking-[0.18em] uppercase text-[#6b6b6b] dark:text-white/45 leading-4">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
