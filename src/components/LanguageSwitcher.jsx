import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { languages } from '../i18n.js';

export default function LanguageSwitcher({ compact = false }) {
  const { lang = 'en' } = useParams();
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const switchLanguage = (nextLanguage) => {
    const pathWithoutLanguage = location.pathname.replace(/^\/(en|ur|mr)/, '') || '';
    localStorage.setItem('school-language', nextLanguage);
    i18n.changeLanguage(nextLanguage);
    navigate(`/${nextLanguage}${pathWithoutLanguage}${location.search}`);
  };

  return (
    <div
      className="flex items-center gap-1 rounded-full bg-neutral-100 p-1 shadow-sm ring-1 ring-neutral-200"
      aria-label="Language selector"
    >
      {Object.entries(languages).map(([code, language]) => (
        <button
          type="button"
          key={code}
          onClick={() => switchLanguage(code)}
          aria-pressed={lang === code}
          className={`min-h-9 rounded-full px-3 py-2 text-xs font-extrabold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#be123c] sm:text-sm ${
            lang === code
              ? 'bg-[#0f766e] text-white shadow-sm'
              : 'text-neutral-700 hover:bg-white hover:text-neutral-900'
          }`}
        >
          {compact ? language.shortLabel : language.label}
        </button>
      ))}
    </div>
  );
}
