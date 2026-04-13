import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher.jsx';

function MenuIcon({ open }) {
  return (
    <span className="relative block h-5 w-6" aria-hidden="true">
      <span
        className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition ${
          open ? 'translate-y-2 rotate-45' : ''
        }`}
      />
      <span
        className={`absolute left-0 top-2 h-0.5 w-6 bg-current transition ${open ? 'opacity-0' : ''}`}
      />
      <span
        className={`absolute left-0 top-4 h-0.5 w-6 bg-current transition ${
          open ? '-translate-y-2 -rotate-45' : ''
        }`}
      />
    </span>
  );
}

export default function Navbar() {
  const { t } = useTranslation();
  const { lang = 'en' } = useParams();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const base = `/${lang}`;
  const navItems = useMemo(
    () => [
      { to: base, label: t('nav.home'), end: true },
      { to: `${base}/about`, label: t('nav.about') },
      { to: `${base}/admissions`, label: t('nav.admissions') },
      { to: `${base}/faculty`, label: t('nav.faculty') },
      { to: `${base}/gallery`, label: t('nav.gallery') },
      { to: `${base}/notices`, label: t('nav.notices') },
      { to: `${base}/contact`, label: t('nav.contact') },
    ],
    [base, t],
  );
  const academicItems = useMemo(
    () => [
      { to: `${base}/academics`, label: t('nav.academics') },
      { to: `${base}/student-corner`, label: t('nav.studentCorner') },
    ],
    [base, t],
  );
  const isAcademicActive = location.pathname.includes('/academics') || location.pathname.includes('/student-corner');

  const linkClass = ({ isActive }) =>
    `nav-link text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e63946] ${
      isActive ? 'nav-link-active' : ''
    }`;

  return (
    <>
      <a href="#main-content" className="skip-link">
        {t('common.skipToContent')}
      </a>
      <header
        className={`sticky top-0 z-50 border-b border-neutral-200 bg-white/92 backdrop-blur transition-shadow ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <nav className="container-page flex min-h-[80px] items-center justify-between gap-4" aria-label={t('nav.main')}>
          <Link to={base} className="flex items-center gap-3" aria-label={t('school.name')}>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[#0f766e] text-lg font-extrabold text-white shadow-sm">
              SP
            </span>
            <div className="leading-tight">
              <span className="block text-base font-extrabold text-[#0f172a] md:text-lg">
                {t('school.name')}
              </span>
              <span className="block text-xs font-bold uppercase tracking-wide text-[#e63946]">
                {t('school.tagline')}
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {navItems.slice(0, 3).map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
                {item.label}
              </NavLink>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen((value) => !value)}
                aria-expanded={dropdownOpen}
                className={`nav-link text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e63946] ${
                  isAcademicActive ? 'nav-link-active' : ''
                }`}
              >
                {t('nav.academicsMenu')} <span aria-hidden="true">v</span>
              </button>
              <div
                className={`dropdown-panel absolute start-0 top-full w-56 rounded-lg border border-neutral-200 bg-white p-2 shadow-xl ${
                  dropdownOpen ? 'open' : ''
                }`}
              >
                {academicItems.map((item) => (
                  <NavLink key={item.to} to={item.to} className={linkClass}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {navItems.slice(3).map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden shrink-0 lg:block">
            <LanguageSwitcher compact />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex min-h-11 items-center gap-3 rounded-lg border border-neutral-300 bg-white px-3 text-sm font-bold text-neutral-900 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <MenuIcon open={menuOpen} />
            {t('nav.menu')}
          </button>
        </nav>

        {menuOpen && (
          <div id="mobile-menu" className="border-t border-neutral-200 bg-white lg:hidden">
            <div className="container-page grid gap-2 py-4">
              {[...navItems.slice(0, 3), ...academicItems, ...navItems.slice(3)].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setMenuOpen(false)}
                  className={linkClass}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
