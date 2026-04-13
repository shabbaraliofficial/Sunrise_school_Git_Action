import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const { lang = 'en' } = useParams();
  const quickLinks = [
    ['about', t('nav.about')],
    ['admissions', t('nav.admissions')],
    ['academics', t('nav.academics')],
    ['notices', t('nav.notices')],
    ['contact', t('nav.contact')],
  ];

  return (
    <footer className="bg-[#123c37] text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-white text-lg font-extrabold text-[#0f766e]">
              SP
            </span>
            <div>
              <p className="text-lg font-extrabold">{t('school.name')}</p>
              <p className="text-sm font-bold text-[#f5c542]">{t('school.tagline')}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md leading-8 text-white/78">{t('footer.description')}</p>
          <div className="mt-6 flex gap-3" aria-label={t('footer.social')}>
            {['f', 'x', 'in', 'yt'].map((item) => (
              <a
                key={item}
                href="https://example.com"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/25 font-extrabold uppercase text-white transition hover:bg-white hover:text-[#0f766e]"
                aria-label={`${t('footer.social')} ${item}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-extrabold">{t('footer.quickLinks')}</h2>
          <ul className="mt-5 grid gap-3">
            {quickLinks.map(([path, label]) => (
              <li key={path}>
                <Link className="text-white/78 transition hover:text-white" to={`/${lang}/${path}`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-extrabold">{t('footer.contactInfo')}</h2>
          <ul className="mt-5 grid gap-3 leading-8 text-white/78">
            <li>{t('contact.addressValue')}</li>
            <li>
              <a href="tel:+912012345678">{t('contact.phoneValue')}</a>
            </li>
            <li>
              <a href="mailto:info@sunrisepublicschool.edu">{t('contact.emailValue')}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/12 py-5">
        <div className="container-page text-sm text-white/68">{t('footer.copyright')}</div>
      </div>
    </footer>
  );
}
