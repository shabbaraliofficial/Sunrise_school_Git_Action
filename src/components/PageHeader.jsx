import FadeIn from './FadeIn.jsx';

export default function PageHeader({ eyebrow, title, text, image }) {
  return (
    <header className="relative isolate min-h-[360px] overflow-hidden bg-[#0f766e] text-white">
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950/70 via-neutral-950/55 to-neutral-950/65" />
      <div className="container-page flex min-h-[360px] items-end pb-14 pt-32">
        <FadeIn className="max-w-3xl">
          {eyebrow && <p className="mb-4 text-sm font-extrabold uppercase tracking-wide text-[#f5c542]">{eyebrow}</p>}
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
          {text && <p className="mt-5 max-w-2xl text-lg leading-9 text-white/90">{text}</p>}
        </FadeIn>
      </div>
    </header>
  );
}
