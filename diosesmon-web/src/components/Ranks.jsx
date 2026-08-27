import FadeIn, { SectionHead } from './FadeIn'
import { RANKS, RANK_COLORS, RANK_TABLE, KITS } from '../data/content'

export default function Ranks() {
  return (
    <section id="rangos" className="py-24">
      <div className="wrap">
        <SectionHead eyebrow="Tienda" title="Rangos y kits">
          Los rangos son acumulativos: cada uno incluye todos los beneficios de los anteriores y no hace
          falta comprarlos en orden.
        </SectionHead>

        <FadeIn>
          <div className="overflow-x-auto rounded-xl border border-line bg-panel px-5 py-2">
            <table className="w-full min-w-[620px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="sticky left-0 bg-panel px-3 py-3.5 text-left font-mono text-xs uppercase tracking-wider text-mist">
                    Beneficio
                  </th>
                  {RANKS.map((rank) => (
                    <th
                      key={rank}
                      className="px-3 py-3.5 text-center font-mono text-xs uppercase tracking-wider"
                      style={{ color: RANK_COLORS[rank].text }}
                    >
                      {rank}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {RANK_TABLE.rows.map((row) => (
                  <tr key={row.label} className="border-t border-line transition-colors hover:bg-gold/5">
                    <td className="sticky left-0 bg-panel px-3 py-3.5 text-left text-mist">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="px-3 py-3.5 text-center">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {KITS.map((kit, i) => {
            const c = RANK_COLORS[kit.rank]
            return (
              <FadeIn key={kit.rank} delay={i * 0.1}>
                <article
                  className="group relative h-full overflow-hidden rounded-xl border border-line bg-panel p-5 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.38)]"
                  style={{ '--kc': c.text }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[3px] opacity-80"
                    style={{ background: `linear-gradient(90deg, ${c.text}, transparent 80%)` }}
                  />
                  <span
                    className="mb-3 inline-block rounded-full px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wider"
                    style={{ color: c.text, background: c.bg }}
                  >
                    {kit.rank}
                  </span>
                  <p className="text-sm text-mist">{kit.desc}</p>
                  <ul className="mt-2.5 flex flex-col gap-1.5 text-sm text-mist">
                    {kit.perks.map((perk) => (
                      <li key={perk} className="relative pl-4">
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-[5px] text-[0.55rem]"
                          style={{ color: c.text }}
                        >
                          ◆
                        </span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3.5 font-mono text-sm text-gold">{kit.dcoins}</p>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
