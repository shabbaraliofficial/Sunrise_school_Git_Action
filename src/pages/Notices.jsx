import { useTranslation } from 'react-i18next';
import FadeIn from '../components/FadeIn.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PageMeta from '../components/PageMeta.jsx';
import SectionIntro from '../components/SectionIntro.jsx';

export default function Notices() {
  const { t } = useTranslation();
  const notices = t('notices.items', { returnObjects: true });

  return (
    <>
      <PageMeta title={t('notices.metaTitle')} description={t('notices.metaDescription')} />
      <PageHeader
        eyebrow={t('notices.eyebrow')}
        title={t('notices.title')}
        text={t('notices.intro')}
        image="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionIntro eyebrow={t('notices.sectionEyebrow')} title={t('notices.sectionTitle')} />
          <div className="mt-10 grid gap-4">
            {notices.map((notice) => (
              <FadeIn key={notice.title}>
                <article className="card lift grid gap-4 p-5 md:grid-cols-[170px_1fr_auto] md:items-center">
                  <p className="font-extrabold text-[#be123c]">{notice.date}</p>
                  <div>
                    <h2 className="text-xl font-extrabold text-neutral-950">{notice.title}</h2>
                    <p className="mt-2 leading-7 text-neutral-700">{notice.text}</p>
                  </div>
                  <span className="w-max rounded-lg bg-[#0f766e]/10 px-3 py-2 text-sm font-extrabold text-[#0f766e]">
                    {notice.type}
                  </span>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
