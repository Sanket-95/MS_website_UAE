import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import Hero from './components/Hero';

const About     = lazy(() => import('./components/About'));
const Companies = lazy(() => import('./components/Companies'));
const Lifestyle = lazy(() => import('./components/Lifestyle'));
const Contact   = lazy(() => import('./components/Contact'));
const Footer    = lazy(() => import('./components/Footer'));

const NAV_LINKS = [
  { label: 'About',     href: '#about' },
  { label: 'Ventures',  href: '#companies' },
  { label: 'Lifestyle', href: '#lifestyle' },
  { label: 'Contact',   href: '#contact' },
];

function SunIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  );
}

export default function App() {
  const [isDark,   setIsDark]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop,  setShowTop]  = useState(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      setShowTop(y > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBg = scrolled
    ? 'bg-white/96 dark:bg-[#171717]/96 backdrop-blur-sm border-b border-linen-border dark:border-sheet-border'
    : 'bg-navy/85 backdrop-blur-sm';

  const navTextColor = scrolled
    ? 'text-ink-soft dark:text-white/70'
    : 'text-white/70';

  const logoColor = scrolled
    ? 'text-ink dark:text-white'
    : 'text-white';

  const iconColor = scrolled
    ? 'text-ink-muted dark:text-white/50'
    : 'text-white/60';

  return (
    <div className="min-h-screen bg-white dark:bg-[#0e0e0e] transition-colors duration-300">

      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#c9a84c] z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ── Navigation ── */}
      <header className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-400 ${navBg}`}>
        <nav className="max-w-7xl mx-auto px-8 sm:px-12 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#"
            className={`font-display text-xl tracking-[0.15em] transition-colors duration-300 ${logoColor}`}>
            M · S
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href}
                  className={`font-body text-[10px] tracking-[0.25em] uppercase transition-colors duration-200 hover:text-[#c9a84c] ${navTextColor}`}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: toggle + hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2 transition-colors duration-200 hover:text-[#c9a84c] ${iconColor}`}>
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              className={`lg:hidden flex flex-col gap-[5px] w-5 ${logoColor}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block h-px w-full bg-current origin-center"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="block h-px w-full bg-current"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block h-px w-full bg-current origin-center"
              />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:hidden overflow-hidden bg-white/98 dark:bg-[#171717]/98 backdrop-blur-sm border-b border-linen-border dark:border-sheet-border"
            >
              <ul className="flex flex-col py-8 px-8 gap-7">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href}
                      onClick={() => setMenuOpen(false)}
                      className="font-body text-[10px] tracking-[0.3em] uppercase text-ink-soft dark:text-white/60 hover:text-[#c9a84c] transition-colors duration-200">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Page content ── */}
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Companies />
          <Lifestyle />
          <Contact />
          <Footer />
        </Suspense>
      </main>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="fixed bottom-8 right-8 z-50 w-10 h-10 border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-white flex items-center justify-center transition-colors duration-200"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
