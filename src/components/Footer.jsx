export default function Footer() {
  return (
    <footer className="bg-[#09131e] py-10 px-8 sm:px-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        <p className="font-display text-lg font-light text-white/50 tracking-[0.12em]">
          Manoj <em className="font-semibold italic text-[#c9a84c]/60">Satija</em>
        </p>

        <p className="font-body text-[10px] text-white/20 tracking-[0.2em] uppercase text-center">
          &copy; {new Date().getFullYear()} Globetech Group · Dubai, UAE
        </p>

        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-6">
            {[
              { label: 'About',     href: '#about' },
              { label: 'Ventures',  href: '#companies' },
              { label: 'Contact',   href: '#contact' },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href}
                  className="font-body text-[10px] tracking-[0.2em] uppercase text-white/20 hover:text-[#c9a84c] transition-colors duration-200">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </footer>
  );
}
