import { useTranslation } from 'react-i18next';
import FadeIn from '../components/FadeIn.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PageMeta from '../components/PageMeta.jsx';
import SectionIntro from '../components/SectionIntro.jsx';

export default function Academics() {
  const { t } = useTranslation();
  const departments = t('academics.departments.items', { returnObjects: true });
  const curriculum = t('academics.curriculum.items', { returnObjects: true });

  return (
    <>
      <PageMeta title={t('academics.metaTitle')} description={t('academics.metaDescription')} />
      <PageHeader
        eyebrow={t('academics.eyebrow')}
        title={t('academics.title')}
        text={t('academics.intro')}
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionIntro
            eyebrow={t('academics.curriculum.eyebrow')}
            title={t('academics.curriculum.title')}
            text={t('academics.curriculum.text')}
            center
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {curriculum.map((item) => (
              <FadeIn key={item.title}>
                <article className="card lift p-6">
                  <h2 className="text-2xl font-extrabold text-neutral-950">{item.title}</h2>
                  <p className="mt-4 leading-8 text-neutral-700">{item.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-stone-50">
        <div className="container-page">
          <SectionIntro
            eyebrow={t('academics.departments.eyebrow')}
            title={t('academics.departments.title')}
            text={t('academics.departments.text')}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((item) => (
              <FadeIn key={item.title}>
                <article className="card lift overflow-hidden">
                  <img src={item.image} alt={item.alt} className="h-48 w-full object-cover" loading="lazy" />
                  <div className="p-5">
                    <h2 className="text-xl font-extrabold text-neutral-950">{item.title}</h2>
                    <p className="mt-3 leading-7 text-neutral-700">{item.text}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
