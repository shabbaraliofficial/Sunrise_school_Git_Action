import { useTranslation } from 'react-i18next';
import FadeIn from '../components/FadeIn.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PageMeta from '../components/PageMeta.jsx';
import SectionIntro from '../components/SectionIntro.jsx';

export default function About() {
  const { t } = useTranslation();
  const values = t('about.values', { returnObjects: true });

  return (
    <>
      <PageMeta title={t('about.metaTitle')} description={t('about.metaDescription')} />
      <PageHeader
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
        text={t('about.intro')}
        image="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <FadeIn>
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"
              alt={t('about.imageAlt')}
              className="h-full min-h-80 w-full rounded-lg object-cover"
            />
          </FadeIn>
          <FadeIn>
            <SectionIntro eyebrow={t('about.history.eyebrow')} title={t('about.history.title')} />
            <p className="mt-5 leading-8 text-neutral-700">{t('about.history.text')}</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-stone-50">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <FadeIn key={value.title}>
              <article className="card lift p-6">
                <p className="eyebrow">{value.kicker}</p>
                <h2 className="mt-3 text-2xl font-extrabold text-neutral-950">{value.title}</h2>
                <p className="mt-4 leading-8 text-neutral-700">{value.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <FadeIn>
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
              alt={t('about.principal.imageAlt')}
              className="h-96 w-full rounded-lg object-cover"
              loading="lazy"
            />
          </FadeIn>
          <FadeIn>
            <blockquote className="border-s-4 border-[#be123c] ps-6">
              <p className="text-2xl font-bold leading-10 text-neutral-950">{t('about.principal.quote')}</p>
              <footer className="mt-5 text-neutral-700">
                <strong className="text-neutral-950">{t('about.principal.name')}</strong>
                <span className="block">{t('about.principal.role')}</span>
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
