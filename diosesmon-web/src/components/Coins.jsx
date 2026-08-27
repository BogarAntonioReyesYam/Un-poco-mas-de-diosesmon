import FadeIn, { SectionHead } from './FadeIn'
import { COIN_USES } from '../data/content'

export default function Coins() {
  return (
    <section id="coins" className="py-24">
      <div className="wrap">
        <SectionHead eyebrow="Economía" title="DiosesCoins">
          La divisa premium y unificada de toda la red Dioses.
        </SectionHead>

        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr]">
          <FadeIn>
            <p className="text-mist">Con DiosesCoins puedes invertir directamente desde tu Pokepad en:</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {COIN_USES.map((use) => (
                <li key={use} className="relative pl-5 text-mist">
                  <span aria-hidden="true" className="absolute left-0 top-1.5 text-[0.65rem] text-gold">
                    ◆
                  </span>
                  {use}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-mist">
              Tu saldo está interconectado con DiosesMC: lo que compras te acompaña en toda la red. Se recarga
              desde la tienda web o directamente en el Pokepad, sin salir del juego.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl border border-line bg-panel p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{ background: 'radial-gradient(circle at 80% 0%, rgba(232,179,61,0.08), transparent 55%)' }}
              />
              {COIN_USES.map((use, i) => (
                <div
                  key={use}
                  className="relative flex items-center gap-3.5 border-b border-line py-3 last:border-0"
                >
                  <span
                    aria-hidden="true"
                    className="h-[34px] w-[34px] shrink-0 rounded-full shadow-[0_0_14px_rgba(232,179,61,0.35)]"
                    style={{
                      background: 'radial-gradient(circle at 35% 30%, #F6D580, #8A6B2A)',
                      animation: 'float-loop 5s ease-in-out infinite',
                      animationDelay: `${i * 0.4}s`,
                    }}
                  />
                  <span className="text-sm text-mist">{use}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
