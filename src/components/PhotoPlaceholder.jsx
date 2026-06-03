import { motion } from 'framer-motion';

/**
 * variant="panel"  — fills full height (hero right column)
 * variant="card"   — aspect-[3/4] portrait card
 * variant="square" — aspect-square
 */
export default function PhotoPlaceholder({ label = 'Professional Portrait', variant = 'card', className = '' }) {
  const sizeClass =
    variant === 'panel'  ? 'h-full min-h-[55vh] w-full' :
    variant === 'square' ? 'aspect-square w-full' :
                           'aspect-[3/4] w-full';

  return (
    <motion.div
      className={`relative overflow-hidden bg-linen-warm dark:bg-sheet-card flex flex-col items-center justify-center transition-colors duration-300 ${sizeClass} ${className}`}
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.0, ease: [0.77, 0, 0.18, 1] }}
    >
      {/* Thin gold corner brackets */}
      {[
        'top-4 left-4 border-t border-l',
        'top-4 right-4 border-t border-r',
        'bottom-4 left-4 border-b border-l',
        'bottom-4 right-4 border-b border-r',
      ].map((cls) => (
        <span
          key={cls}
          className={`absolute w-8 h-8 border-[#c9a84c] ${cls}`}
          style={{ borderWidth: '1px' }}
          aria-hidden="true"
        />
      ))}

      {/* Inner content */}
      <div className="flex flex-col items-center gap-4 px-8 text-center">
        {/* Elegant person icon */}
        <svg
          className="w-10 h-10 text-[#c9a84c] opacity-25"
          fill="none" stroke="currentColor" strokeWidth={0.8}
          viewBox="0 0 24 24" aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
        </svg>

        {/* Serif monogram */}
        <p className="font-display text-2xl font-light text-[#c9a84c] opacity-30 tracking-widest">
          M · S
        </p>

        {/* Label */}
        <p className="font-body text-[10px] text-[#c9a84c] opacity-40 tracking-[0.3em] uppercase">
          {label}
        </p>
      </div>
    </motion.div>
  );
}
