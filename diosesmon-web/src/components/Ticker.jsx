import { TICKER_ITEMS } from '../data/content'

function Group() {
  return (
    <div className="flex gap-11 pr-11">
      {TICKER_ITEMS.map((item) => (
        <span key={item} className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.14em] text-mist">
          <b className="font-medium text-gold">◆</b> {item}
        </span>
      ))}
    </div>
  )
}

export default function Ticker() {
  return (
    <div
      aria-hidden="true"
      className="ticker overflow-hidden border-y border-line bg-panel/50 py-3"
      style={{
        maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div className="ticker-track">
        <Group />
        <Group />
      </div>
    </div>
  )
}
