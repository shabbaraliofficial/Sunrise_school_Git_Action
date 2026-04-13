import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FadeIn from '../components/FadeIn.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PageMeta from '../components/PageMeta.jsx';
import SectionIntro from '../components/SectionIntro.jsx';

export default function Contact() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageMeta title={t('contact.metaTitle')} description={t('contact.metaDescription')} />
      <PageHeader
        eyebrow={t('contact.eyebrow')}
        title={t('contact.title')}
        text={t('contact.intro')}
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <SectionIntro eyebrow={t('contact.infoEyebrow')} title={t('contact.infoTitle')} text={t('contact.infoText')} />
            <dl className="mt-8 grid gap-5">
              {['address', 'phone', 'email', 'hours'].map((item) => (
                <div className="card p-5" key={item}>
                  <dt className="font-extrabold text-[#be123c]">{t(`contact.${item}`)}</dt>
                  <dd className="mt-2 leading-7 text-neutral-700">{t(`contact.${item}Value`)}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
          <FadeIn>
            <form className="card p-6 md:p-8" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-extrabold text-neutral-950">{t('contact.form.title')}</h2>
              <div className="mt-6 grid gap-4">
                {['name', 'email', 'subject'].map((field) => (
                  <label className="grid gap-2 text-sm font-bold text-neutral-800" key={field}>
                    {t(`contact.form.${field}`)}
                    <input
                      required
                      type={field === 'email' ? 'email' : 'text'}
                      className="min-h-12 rounded-lg border border-neutral-300 px-4 outline-none transition focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/15"
                    />
                  </label>
                ))}
                <label className="grid gap-2 text-sm font-bold text-neutral-800">
                  {t('contact.form.message')}
                  <textarea
                    required
                    rows="5"
                    className="rounded-lg border border-neutral-300 px-4 py-3 outline-none transition focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/15"
                  />
                </label>
              </div>
              <button className="btn-primary mt-6 w-full md:w-auto" type="submit">
                {t('contact.form.submit')}
              </button>
              {sent && (
                <p className="mt-4 rounded-lg bg-[#0f766e]/10 p-4 font-bold text-[#0f766e]" role="status">
                  {t('contact.form.success')}
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </section>
      <section className="bg-stone-50 pb-20">
        <div className="container-page">
          <FadeIn>
            <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
              <iframe
                title={t('contact.mapTitle')}
                src="https://www.google.com/maps?q=Pune%20Maharashtra%20India&output=embed"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
