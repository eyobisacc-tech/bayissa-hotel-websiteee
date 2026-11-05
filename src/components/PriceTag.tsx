export interface SamplePrice {
  amount: string;
  unit: string;
}

interface PriceTagProps extends SamplePrice {
  className?: string;
}

export default function PriceTag({ amount, unit, className = "" }: PriceTagProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-champagne/20 pt-4 ${className}`}
    >
      <span className="inline-block text-[0.6rem] tracking-[0.18em] uppercase text-champagne border border-champagne/40 px-2 py-1">
        Sample Price
      </span>
      <span className="font-display text-2xl text-warm-white leading-none">{amount}</span>
      <span className="text-xs text-warm-white/60">{unit}</span>
    </div>
  );
}
