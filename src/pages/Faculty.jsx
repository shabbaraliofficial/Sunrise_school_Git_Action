import { useTranslation } from 'react-i18next';
import FadeIn from '../components/FadeIn.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PageMeta from '../components/PageMeta.jsx';
import SectionIntro from '../components/SectionIntro.jsx';

export default function Faculty() {
  const { t } = useTranslation();
  const teachers = t('faculty.teachers', { returnObjects: true });

  return (
    <>
      <PageMeta title={t('faculty.metaTitle')} description={t('faculty.metaDescription')} />
      <PageHeader
        eyebrow={t('faculty.eyebrow')}
        title={t('faculty.title')}
        text={t('faculty.intro')}
        image="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionIntro
            eyebrow={t('faculty.sectionEyebrow')}
            title={t('faculty.sectionTitle')}
            text={t('faculty.sectionText')}
            center
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher) => (
              <FadeIn key={teacher.name}>
                <article className="card lift overflow-hidden">
                  <img src={teacher.image} alt={teacher.alt} className="h-72 w-full object-cover" loading="lazy" />
                  <div className="p-5">
                    <h2 className="text-xl font-extrabold text-neutral-950">{teacher.name}</h2>
                    <p className="mt-1 font-bold text-[#be123c]">{teacher.role}</p>
                    <p className="mt-3 leading-7 text-neutral-700">{teacher.text}</p>
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
