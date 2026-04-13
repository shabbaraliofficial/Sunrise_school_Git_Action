import { useTranslation } from 'react-i18next';
import FadeIn from '../components/FadeIn.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PageMeta from '../components/PageMeta.jsx';
import SectionIntro from '../components/SectionIntro.jsx';

export default function Gallery() {
  const { t } = useTranslation();
  const photos = t('gallery.photos', { returnObjects: true });
  const videos = t('gallery.videos', { returnObjects: true });

  return (
    <>
      <PageMeta title={t('gallery.metaTitle')} description={t('gallery.metaDescription')} />
      <PageHeader
        eyebrow={t('gallery.eyebrow')}
        title={t('gallery.title')}
        text={t('gallery.intro')}
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionIntro
            eyebrow={t('gallery.photoEyebrow')}
            title={t('gallery.photoTitle')}
            text={t('gallery.photoText')}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <FadeIn key={photo.caption}>
                <figure className="card lift overflow-hidden">
                  <img src={photo.image} alt={photo.alt} className="h-64 w-full object-cover" loading="lazy" />
                  <figcaption className="p-4 font-bold text-neutral-900">{photo.caption}</figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-stone-50">
        <div className="container-page">
          <SectionIntro eyebrow={t('gallery.videoEyebrow')} title={t('gallery.videoTitle')} />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {videos.map((video) => (
              <FadeIn key={video.title}>
                <article className="card lift overflow-hidden">
                  <div className="aspect-video bg-neutral-900">
                    <iframe
                      className="h-full w-full"
                      src={video.url}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <h2 className="p-5 text-xl font-extrabold text-neutral-950">{video.title}</h2>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
