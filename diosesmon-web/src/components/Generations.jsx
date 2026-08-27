import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import FadeIn, { SectionHead } from './FadeIn'
import PokedexModal from './PokedexModal'
import { GENERATIONS, REGIONS } from '../data/content'

const STATUS_LABEL = { active: 'Activa', soon: 'Próximamente', announced: 'Por anunciar' }

function GenCell({ gen }) {
  const active = gen.status === 'active'
  return (
    <div
      className={`rounded-xl border p-4 transition duration-300 hover:-translate-y-1 ${
        active
          ? 'border-golddim bg-gradient-to-br from-gold/[0.14] to-transparent hover:shadow-[0_10px_30px_rgba(232,179,61,0.12)]'
          : 'border-line opacity-55'
      }`}
    >
      <div className={`font-mono text-2xl font-semibold ${active ? 'text-gold' : 'text-ink'}`}>{gen.num}</div>
      <div className="mt-0.5 text-sm text-mist">{gen.name}</div>
      <div
        className={`mt-3 flex flex-wrap items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-wider ${
          active ? 'text-gold' : 'text-mist'
        }`}
      >
        {active ? (
          <span className="anim-pulse-dot h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
        ) : (
          <span className="h-1.5 w-1.5 shrink-0 rounded-full border border-mist" aria-hidden="true" />
        )}
        {STATUS_LABEL[gen.status]}
        {gen.isNew && (
          <span className="rounded-full border border-ember/40 bg-ember/15 px-2 py-0.5 text-[0.58rem] tracking-[0.1em] text-[#F0938A]">
            Nuevo
          </span>
        )}
      </div>
    </div>
  )
}

function RegionCard({ region, delay, onOpen }) {
  return (
    <FadeIn delay={delay}>
      <article className="h-full rounded-xl border border-line bg-night/50 p-4 transition duration-300 hover:-translate-y-1 hover:border-golddim">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-semibold">{region.name}</h3>
          <span className="rounded-full border border-golddim px-2 py-0.5 font-mono text-[0.62rem] tracking-[0.1em] text-gold">
            {region.gen}
          </span>
        </div>
        <p className="mt-1.5 font-mono text-[0.68rem] uppercase tracking-wider text-mist">
          {region.count} pokémon · Activa{region.isNew ? ' · Nuevo' : ''}
        </p>

        <div className="mt-3.5 flex flex-wrap gap-2">
          {region.starters.map((s) => (
            <span
              key={s.name}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-ink/5 px-2.5 py-1 text-xs transition hover:bg-ink/10"
              title={s.type}
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ background: s.color, boxShadow: `0 0 8px ${s.color}` }}
              />
              {s.name}
            </span>
          ))}
        </div>

        <button
          onClick={() => onOpen(region)}
          className="mt-3.5 w-full border-t border-dashed border-line pt-3 text-left font-mono text-[0.68rem] uppercase tracking-wider text-mist transition-colors hover:text-gold"
        >
          Ver los {region.count} pokémon ▸
        </button>
      </article>
    </FadeIn>
  )
}

export default function Generations() {
  const [openRegion, setOpenRegion] = useState(null)
  const [highlightId, setHighlightId] = useState(null)
  const location = useLocation()
  const activeCount = GENERATIONS.filter((g) => g.status === 'active').length

  useEffect(() => {
    const regionId = location.state?.regionId
    if (!regionId) return undefined
    const region = REGIONS.find((r) => r.id === regionId)
    if (region) {
      setOpenRegion(region)
      setHighlightId(location.state.pokemonId || null)
      document.getElementById('generaciones')?.scrollIntoView({ behavior: 'instant' })
    }
    window.history.replaceState({ ...window.history.state, usr: undefined }, '')
    return undefined
  }, [location.state])

  return (
    <section id="generaciones" className="py-24">
      <div className="wrap">
        <SectionHead eyebrow="Pokédex del servidor" title="Generaciones activas">
          El servidor va desbloqueando generaciones de forma progresiva. Esto es lo que hay disponible ahora
          mismo y lo que está por llegar.
        </SectionHead>

        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-panel p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                background:
                  'repeating-linear-gradient(0deg, transparent 0 3px, rgba(0,0,0,0.09) 3px 4px)',
              }}
            />
            <div className="relative">
              <div className="mb-5 flex flex-wrap justify-between gap-2 font-mono text-xs text-mist">
                <span>◈ ESTADO DE LA POKÉDEX DE RED</span>
                <span>{activeCount} DE 9 GENERACIONES DESBLOQUEADAS</span>
              </div>

              <div
                className="mb-6 h-1 overflow-hidden rounded bg-night"
                role="progressbar"
                aria-valuenow={activeCount}
                aria-valuemin="0"
                aria-valuemax="9"
                aria-label="Generaciones desbloqueadas"
              >
                <motion.div
                  className="h-full rounded bg-gradient-to-r from-golddim to-gold shadow-[0_0_12px_rgba(232,179,61,0.5)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(activeCount / 9) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                />
              </div>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3.5">
                {GENERATIONS.map((gen) => (
                  <GenCell key={gen.num} gen={gen} />
                ))}
              </div>

              <div className="mt-7 mb-4 flex flex-wrap justify-between gap-2 font-mono text-xs text-mist">
                <span>◈ INICIALES Y POKÉDEX POR REGIÓN ACTIVA</span>
                <span>3 REGIONES DISPONIBLES</span>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3.5">
                {REGIONS.map((region, i) => (
                  <RegionCard key={region.id} region={region} delay={i * 0.1} onOpen={setOpenRegion} />
                ))}
              </div>

              <p className="relative mt-5 text-sm text-mist">
                Diosesmon activó la 3ª Generación (Hoenn) recientemente, sumando nuevos Pokémon, el pin
                exclusivo de Celebi y mejoras en las recompensas de crianza. El calendario de próximas
                generaciones se anuncia por Discord y en los parches — este panel refleja el estado más
                reciente que hemos podido confirmar, así que confírmalo en el Discord oficial antes de
                planear en base a él.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      <PokedexModal
        region={openRegion}
        highlightId={highlightId}
        onClose={() => { setOpenRegion(null); setHighlightId(null) }}
      />
    </section>
  )
}
