export default function SectionIntro({ eyebrow, title, text, center = false }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-extrabold leading-tight text-neutral-950 md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-neutral-700 md:text-lg">{text}</p>}
    </div>
  );
}
