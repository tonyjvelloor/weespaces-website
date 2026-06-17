export default function Marquee({ text }: { text: string }) {
  return (
    <div className="relative w-full overflow-hidden bg-accent/10 border-y border-accent/20 py-3 flex">
      <div className="animate-marquee whitespace-nowrap flex font-heading text-accent/80 font-bold uppercase tracking-[0.2em] text-sm">
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
      </div>
    </div>
  );
}
