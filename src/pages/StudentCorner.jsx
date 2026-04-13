import { useTranslation } from 'react-i18next';
import FadeIn from '../components/FadeIn.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PageMeta from '../components/PageMeta.jsx';
import SectionIntro from '../components/SectionIntro.jsx';

export default function StudentCorner() {
  const { t } = useTranslation();
  const materials = t('student.materials', { returnObjects: true });
  const results = t('student.results', { returnObjects: true });

  return (
    <>
      <PageMeta title={t('student.metaTitle')} description={t('student.metaDescription')} />
      <PageHeader
        eyebrow={t('student.eyebrow')}
        title={t('student.title')}
        text={t('student.intro')}
        image="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionIntro
              eyebrow={t('student.materialEyebrow')}
              title={t('student.materialTitle')}
              text={t('student.materialText')}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {materials.map((item) => (
                <FadeIn key={item.title}>
                  <a className="card lift block p-5" href="https://example.com">
                    <p className="text-sm font-extrabold text-[#be123c]">{item.grade}</p>
                    <h2 className="mt-2 text-xl font-extrabold text-neutral-950">{item.title}</h2>
                    <p className="mt-2 leading-7 text-neutral-700">{item.text}</p>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
          <div>
            <SectionIntro eyebrow={t('student.resultsEyebrow')} title={t('student.resultsTitle')} />
            <FadeIn>
              <div className="mt-8 overflow-hidden rounded-lg border border-neutral-200 bg-white">
                <table className="w-full border-collapse text-start">
                  <caption className="sr-only">{t('student.resultsTitle')}</caption>
                  <thead className="bg-[#0f766e] text-white">
                    <tr>
                      <th className="p-4 text-start">{t('student.table.class')}</th>
                      <th className="p-4 text-start">{t('student.table.exam')}</th>
                      <th className="p-4 text-start">{t('student.table.status')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((item) => (
                      <tr className="border-t border-neutral-200" key={`${item.className}-${item.exam}`}>
                        <td className="p-4 font-bold">{item.className}</td>
                        <td className="p-4">{item.exam}</td>
                        <td className="p-4 font-bold text-[#0f766e]">{item.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
