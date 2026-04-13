import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FadeIn from '../components/FadeIn.jsx';
import PageMeta from '../components/PageMeta.jsx';
import SectionIntro from '../components/SectionIntro.jsx';

export default function Home() {
  const { t } = useTranslation();
  const { lang = 'en' } = useParams();
  const achievements = t('home.achievements.items', { returnObjects: true });
  const announcements = t('home.announcements.items', { returnObjects: true });

  return (
    <>
      <PageMeta title={t('home.metaTitle')} description={t('home.metaDescription')} />
      <section className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-[#0f766e] text-white">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=80"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950/70 via-neutral-950/60 to-neutral-950/65" />
        <div className="container-page flex min-h-[calc(100vh-80px)] items-center pb-24 pt-20">
          <FadeIn className="max-w-3xl">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-wide text-[#f5c542]">
              {t('home.hero.kicker')}
            </p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-7xl">{t('home.hero.title')}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/90 md:text-xl">{t('home.hero.subtitle')}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="btn-primary" to={`/${lang}/admissions`}>
                {t('home.hero.primaryCta')}
              </Link>
              <Link className="btn-secondary" to={`/${lang}/about`}>
                {t('home.hero.secondaryCta')}
              </Link>
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-stone-50" />
      </section>

      <section className="section-pad bg-stone-50">
        <div className="container-page">
          <SectionIntro
            eyebrow={t('home.achievements.eyebrow')}
            title={t('home.achievements.title')}
            text={t('home.achievements.text')}
            center
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {achievements.map((item) => (
              <FadeIn key={item.label}>
                <article className="card lift p-6 text-center">
                  <p className="text-4xl font-extrabold text-[#0f766e]">{item.value}</p>
                  <h2 className="mt-4 text-xl font-extrabold text-neutral-950">{item.label}</h2>
                  <p className="mt-3 leading-7 text-neutral-700">{item.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <SectionIntro
              eyebrow={t('home.announcements.eyebrow')}
              title={t('home.announcements.title')}
              text={t('home.announcements.text')}
            />
            <Link className="btn-primary mt-8" to={`/${lang}/notices`}>
              {t('home.announcements.cta')}
            </Link>
          </FadeIn>
          <div className="grid gap-4">
            {announcements.map((item, index) => (
              <FadeIn key={item.title} delay={0.08 * index}>
                <article className="card lift p-5">
                  <p className="text-sm font-extrabold text-[#be123c]">{item.date}</p>
                  <h2 className="mt-2 text-xl font-extrabold text-neutral-950">{item.title}</h2>
                  <p className="mt-2 leading-7 text-neutral-700">{item.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f766e] py-14 text-white">
        <FadeIn className="container-page flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-wide text-[#f5c542]">{t('home.cta.eyebrow')}</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">{t('home.cta.title')}</h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/84">{t('home.cta.text')}</p>
          </div>
          <Link className="btn-secondary shrink-0" to={`/${lang}/admissions`}>
            {t('home.cta.button')}
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
