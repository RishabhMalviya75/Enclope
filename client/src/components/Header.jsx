import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Play } from 'lucide-react';

const navLinks = [
  { href: '/games', label: 'Games' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // close the panel on navigation, and lock the page behind it
  useEffect(() => setIsMenuOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full p-4 md:p-6">
        <nav
          className={`container mx-auto flex items-center justify-between rounded-xl border p-3 pl-5 transition-all duration-300 md:p-4 md:pl-6 ${
            isScrolled
              ? 'border-border bg-base/80 shadow-2xl shadow-black/40 backdrop-blur-md'
              : 'border-transparent bg-base/40 backdrop-blur-md'
          }`}
        >
          <Link to="/" className="font-heading text-2xl tracking-wider sm:text-3xl">
            <span className="text-text-primary">E</span>
            <span className="text-text-secondary">nclop</span>
          </Link>

          {/* desktop */}
          <div className="hidden items-center gap-10 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link ${
                  location.pathname === link.href ? 'text-text-primary' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/camocrew/"
              className="btn-primary inline-flex min-h-[44px] items-center gap-2 rounded-full"
            >
              <Play size={14} />
              Play Camo Crew
            </a>
          </div>

          {/* mobile toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="z-50 flex h-11 w-11 items-center justify-center rounded-lg text-text-primary md:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* mobile panel */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-9 bg-base/95 text-2xl backdrop-blur-md transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="transition-colors hover:text-text-primary"
          >
            {link.label}
          </Link>
        ))}
        <a
          href="/camocrew/"
          className="btn-primary mt-2 inline-flex min-h-[48px] items-center gap-2 rounded-full text-base"
        >
          <Play size={16} />
          Play Camo Crew
        </a>
      </div>
    </>
  );
}
