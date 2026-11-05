interface DemoPriceNoteProps {
  className?: string;
}

export default function DemoPriceNote({ className = "" }: DemoPriceNoteProps) {
  return (
    <p className={`text-sm text-warm-white/60 leading-relaxed ${className}`}>
      <span className="text-champagne uppercase tracking-[0.15em] text-[0.7rem] mr-2">Demo prices</span>
      For presentation only. Final prices to be confirmed by Bayissa Hotel &amp; Spa.
    </p>
  );
}
