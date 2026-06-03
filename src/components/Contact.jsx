import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const reveal = (delay = 0) => ({
  hidden:  { opacity: 0, y: 18, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)',
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] } },
});

const CONTACT_ITEMS = [
  {
    label: 'Email',
    lines: ['ms@globetechgroup.net', 'manoj.satija@valadinfotech.com'],
    href:  'mailto:ms@globetechgroup.net',
  },
  {
    label: 'Phone',
    lines: ['+971 502988575'],
    href:  'tel:+971502988575',
  },
  {
    label: 'Address',
    lines: ['4203 Bahar 1', 'Jumeirah Beach Residence', 'Dubai, UAE'],
    href:  null,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-navy py-24 lg:py-36"
      aria-label="Contact section"
    >
      <div className="max-w-6xl mx-auto px-8 sm:px-12">

        {/* Section label */}
        <motion.div
          variants={reveal(0)}
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="font-body text-[10px] text-[#c9a84c] tracking-[0.5em] uppercase font-semibold">04</span>
          <div className="h-px w-10 bg-[#c9a84c] opacity-50" />
          <span className="font-body text-[10px] text-white/55 tracking-[0.4em] uppercase">Connect</span>
        </motion.div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: heading + socials */}
          <div>
            <motion.h2
              variants={reveal(0.1)}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="font-display text-5xl sm:text-6xl font-light text-white leading-[1.05] mb-1"
            >
              Get In
            </motion.h2>
            <motion.h2
              variants={reveal(0.18)}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="font-display text-5xl sm:text-6xl font-semibold italic text-[#c9a84c] leading-[1.1] mb-14"
            >
              Touch.
            </motion.h2>

            {/* Social links */}
            <motion.div
              variants={reveal(0.26)}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col gap-4"
            >
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-white/45 mb-2">
                Social
              </p>

              <a href="https://www.linkedin.com/in/manoj-satija-88a67418/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[#c9a84c] transition-colors duration-200">
                <FaLinkedin className="w-4 h-4 flex-shrink-0" />
                <span className="font-body text-sm font-light">LinkedIn</span>
              </a>

              <div className="flex items-center gap-3 text-white/35 cursor-default">
                <FaInstagram className="w-4 h-4 flex-shrink-0" />
                <span className="font-body text-sm font-light">Instagram</span>
                <span className="font-body text-[9px] tracking-[0.25em] uppercase border border-white/20 text-white/40 px-2 py-0.5">
                  Coming Soon
                </span>
              </div>

              <div className="flex items-center gap-3 text-white/35 cursor-default">
                <FaXTwitter className="w-4 h-4 flex-shrink-0" />
                <span className="font-body text-sm font-light">X / Twitter</span>
                <span className="font-body text-[9px] tracking-[0.25em] uppercase border border-white/20 text-white/40 px-2 py-0.5">
                  Coming Soon
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: contact blocks */}
          <motion.div
            variants={reveal(0.14)}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col border-t border-white/15"
          >
            {CONTACT_ITEMS.map((item) => (
              <div
                key={item.label}
                className="py-8 border-b border-white/15"
              >
                <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#c9a84c] mb-3">
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href}
                    className="font-body text-[14px] text-white/75 font-light leading-[1.8] hover:text-[#c9a84c] transition-colors duration-200">
                    {item.lines.map((line, j) => (
                      <span key={j} className="block">{line}</span>
                    ))}
                  </a>
                ) : (
                  <div className="font-body text-[14px] text-white/75 font-light leading-[1.8]">
                    {item.lines.map((line, j) => (
                      <span key={j} className="block">{line}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
