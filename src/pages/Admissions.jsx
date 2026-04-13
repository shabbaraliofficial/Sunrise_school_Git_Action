import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FadeIn from '../components/FadeIn.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PageMeta from '../components/PageMeta.jsx';
import SectionIntro from '../components/SectionIntro.jsx';

export default function Admissions() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const steps = t('admissions.steps.items', { returnObjects: true });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageMeta title={t('admissions.metaTitle')} description={t('admissions.metaDescription')} />
      <PageHeader
        eyebrow={t('admissions.eyebrow')}
        title={t('admissions.title')}
        text={t('admissions.intro')}
        image="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <SectionIntro
              eyebrow={t('admissions.steps.eyebrow')}
              title={t('admissions.steps.title')}
              text={t('admissions.steps.text')}
            />
            <div className="mt-8 grid gap-4">
              {steps.map((step, index) => (
                <FadeIn key={step.title} delay={0.05 * index}>
                  <article className="card lift p-5">
                    <p className="text-sm font-extrabold text-[#be123c]">{String(index + 1).padStart(2, '0')}</p>
                    <h2 className="mt-2 text-xl font-extrabold text-neutral-950">{step.title}</h2>
                    <p className="mt-2 leading-7 text-neutral-700">{step.text}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          <FadeIn>
            <form className="card p-6 md:p-8" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-extrabold text-neutral-950">{t('admissions.form.title')}</h2>
            <p className="mt-3 leading-7 text-neutral-700">{t('admissions.form.text')}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {['studentName', 'parentName', 'email', 'phone', 'grade'].map((field) => (
                <label className="grid gap-2 text-sm font-bold text-neutral-800" key={field}>
                  {t(`admissions.form.${field}`)}
                  <input
                    required
                    type={field === 'email' ? 'email' : 'text'}
                    className="min-h-12 rounded-lg border border-neutral-300 px-4 outline-none transition focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/15"
                  />
                </label>
              ))}
              <label className="grid gap-2 text-sm font-bold text-neutral-800 md:col-span-2">
                {t('admissions.form.message')}
                <textarea
                  rows="5"
                  className="rounded-lg border border-neutral-300 px-4 py-3 outline-none transition focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/15"
                />
              </label>
            </div>
            <button className="btn-primary mt-6 w-full md:w-auto" type="submit">
              {t('admissions.form.submit')}
            </button>
            {submitted && (
              <p className="mt-4 rounded-lg bg-[#0f766e]/10 p-4 font-bold text-[#0f766e]" role="status">
                {t('admissions.form.success')}
              </p>
            )}
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
