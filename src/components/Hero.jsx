import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaLinkedin } from 'react-icons/fa';

const fadeBlur = (delay = 0) => ({
  hidden:  { opacity: 0, filter: 'blur(6px)', y: 14 },
  visible: { opacity: 1, filter: 'blur(0px)',  y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] } },
});

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <header
      ref={ref}
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── LEFT: dark navy panel — always first (order-1) ── */}
      <div className="bg-navy dark:bg-[#09131e] flex flex-col justify-center px-10 sm:px-14 py-32 lg:py-24 order-1 transition-colors duration-300">

        {/* Top label */}
        <motion.p
          variants={fadeBlur(0.1)}
          initial="hidden" animate="visible"
          className="font-body text-[10px] text-[#c9a84c] tracking-[0.4em] uppercase mb-10"
        >
          Official Portfolio
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeBlur(0.25)}
          initial="hidden" animate="visible"
          className="font-display text-6xl sm:text-7xl font-light text-white leading-[1.0] mb-2"
        >
          Manoj
        </motion.h1>
        <motion.h1
          variants={fadeBlur(0.37)}
          initial="hidden" animate="visible"
          className="font-display text-6xl sm:text-7xl font-semibold italic text-[#c9a84c] leading-[1.05] mb-8"
        >
          Satija
        </motion.h1>

        {/* Gold rule */}
        <motion.div
          className="gold-rule mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.77, 0, 0.18, 1] }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Designation */}
        <motion.p
          variants={fadeBlur(0.55)}
          initial="hidden" animate="visible"
          className="font-body text-base text-white/85 font-light mb-2"
        >
          Founder &amp; Chairman
        </motion.p>
        <motion.p
          variants={fadeBlur(0.62)}
          initial="hidden" animate="visible"
          className="font-body text-sm text-[#c9a84c] tracking-wider mb-10"
        >
          CEO, Globetech Group · Dubai, UAE
        </motion.p>

        {/* Bio snippet */}
        <motion.p
          variants={fadeBlur(0.7)}
          initial="hidden" animate="visible"
          className="font-body text-sm text-white/65 leading-[1.85] mb-10 max-w-sm font-light"
        >
          A Marine Chief Engineer by qualification and an industry leader by experience,
          spanning for almost four decades.
        </motion.p>

        {/* Tags */}
        <motion.div
          variants={fadeBlur(0.82)}
          initial="hidden" animate="visible"
          className="flex flex-wrap gap-2 mb-12"
        >
          {['British National', 'Based in UAE', '25+ Years'].map((t) => (
            <span key={t}
              className="px-3 py-1.5 border border-white/20 text-white/60 font-body text-[10px] tracking-[0.2em] uppercase">
              {t}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeBlur(0.92)}
          initial="hidden" animate="visible"
          className="flex items-center gap-6"
        >
          <a href="#about"
            className="px-8 py-3 bg-[#c9a84c] text-[#0d1b2a] font-body font-semibold text-sm tracking-wide hover:bg-[#ddb95a] transition-colors duration-300">
            Explore
          </a>
          <a href="https://www.linkedin.com/in/manoj-satija-88a67418/"
            target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 text-white/45 hover:text-[#c9a84c] transition-colors duration-200 font-body text-sm">
            <FaLinkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* ── RIGHT: photo column — always second (order-2) ── */}
      <motion.div
        style={{ y: photoY }}
        className="relative bg-[#f0ece3] dark:bg-[#181818] order-2 min-h-[55vh] lg:min-h-screen overflow-hidden transition-colors duration-300"
      >
        {/* Thin vertical gold accent at the seam */}
        <div className="absolute left-0 top-0 bottom-0 w-px z-10"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.35) 30%, rgba(201,168,76,0.35) 70%, transparent)' }} />

        {/* Faint serif watermark for visual depth */}
        <div className="absolute bottom-10 right-8 pointer-events-none select-none z-10" aria-hidden="true">
          <p className="font-display text-[7rem] font-semibold italic leading-none text-[#c9a84c] opacity-[0.06]">
            M·S
          </p>
        </div>

        {/* Corner accent dots */}
        <div className="absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-[#c9a84c] opacity-30 z-10" />
        <div className="absolute top-14 right-8 w-1 h-1 rounded-full bg-[#c9a84c] opacity-20 z-10" />

        <img
          src="/imgs/portrait-main.jpg"
          alt="Manoj Satija — Founder &amp; Chairman, Globetech Group"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
      </motion.div>
    </header>
  );
}
