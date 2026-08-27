import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import FadeIn, { SectionHead } from './FadeIn'
import { GYM_REGIONS, BADGE_URL } from '../data/gyms'
import { nameById } from '../data/content'
import { TYPES_BY_ID, typeEs, typeColor, spriteSmall } from '../data/pokemonTypes'

function GymModal({ gym, region, onClose }) {
  useEffect(() => {
    if (!gym) return undefined
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [gym, onClose])

  const tc = gym ? typeColor(gym.type) : null

  return (
    <AnimatePresence>
      {gym && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto bg-night/90 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="mx-auto max-w-3xl rounded-2xl border border-line bg-night p-5 shadow-[0_30px_80px_rgba(0,0,0,0.6)] sm:p-8"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`Equipo de ${gym.leader}`}
          >
            <div className="mb-6 flex items-center gap-4">
              <img
                src={BADGE_URL(gym.badge)}
                alt={`Medalla de ${gym.leader}`}
                width="64"
                height="64"
                className="h-16 w-16 shrink-0"
                style={{ imageRendering: 'pixelated' }}
              />
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-2xl font-bold">{gym.leader}</h3>
                <p className="font-mono text-xs uppercase tracking-wider text-mist">
                  Líder de gimnasio · {region.name} {region.gen}
                </p>
                <span
                  className="mt-1.5 inline-block rounded px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider"
                  style={{ background: `${tc}26`, color: tc, border: `1px solid ${tc}55` }}
                >
                  {typeEs(gym.type)}
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line text-mist transition hover:border-gold hover:text-gold"
              >
                <X size={18} />
              </button>
            </div>

            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-mist">
              ◈ EQUIPO DEL LÍDER · {gym.pokemon.length} POKÉMON
            </p>
            <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4">
              {gym.pokemon.map((id) => {
                const types = TYPES_BY_ID[String(id)] || []
                return (
                  <Link
                    key={id}
                    to={`/pokemon/${id}`}
                    onClick={onClose}
                    className="group flex flex-col items-center rounded-xl border border-line bg-panel p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-golddim hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]"
                  >
                    <img
                      src={spriteSmall(id)}
                      alt={nameById(id)}
                      width="96"
                      height="96"
                      loading="lazy"
                      className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
                      style={{ imageRendering: 'pixelated' }}
                    />
                    <p className="mt-2 font-mono text-[0.68rem] tracking-[0.15em] text-mist">
                      N.º {String(id).padStart(4, '0')}
                    </p>
                    <h4 className="text-base font-semibold capitalize">{nameById(id)}</h4>
                    <div className="mt-2 flex flex-wrap justify-center gap-1.5">
                      {types.map((t) => {
                        const c = typeColor(t)
                        return (
                          <span
                            key={t}
                            className="rounded px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-wider"
                            style={{ background: `${c}2e`, color: c, border: `1px solid ${c}55` }}
                          >
                            {typeEs(t)}
                          </span>
                        )
                      })}
                    </div>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Gyms() {
  const [open, setOpen] = useState(null)

  return (
    <section id="gyms" className="py-24">
      <div className="wrap">
        <SectionHead eyebrow="Liga Pokémon" title="Gimnasios">
          Los líderes de gimnasio de cada región y el equipo que usarán contra ti. Haz clic en una medalla
          para ver su equipo.
        </SectionHead>

        <div className="grid gap-6 md:grid-cols-3">
          {GYM_REGIONS.map((region, ri) => (
            <FadeIn key={region.id} delay={ri * 0.12}>
              <div className="h-full rounded-2xl border border-line bg-panel p-6">
                <div className="mb-5 text-center">
                  <h3 className="inline-block border-b-2 border-gold pb-1 font-display text-xl font-bold">
                    {region.name}
                  </h3>
                  <span className="ml-2 font-mono text-[0.65rem] tracking-[0.1em] text-gold">{region.gen}</span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {region.gyms.map((gym, gi) => {
                    const badge = region.badgeStart + gi
                    const tc = typeColor(gym.type)
                    return (
                      <button
                        key={gym.leader}
                        onClick={() => setOpen({ gym: { ...gym, badge }, region })}
                        title={`${gym.leader} · ${typeEs(gym.type)}`}
                        className="group flex flex-col items-center gap-1.5"
                      >
                        <span
                          className="flex h-14 w-14 items-center justify-center rounded-xl border border-line bg-night/50 transition duration-300 group-hover:-translate-y-1 group-hover:border-gold group-hover:shadow-[0_8px_20px_rgba(232,179,61,0.2)]"
                        >
                          <img
                            src={BADGE_URL(badge)}
                            alt={`Medalla ${gi + 1} de ${region.name}`}
                            width="40"
                            height="40"
                            loading="lazy"
                            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                            style={{ imageRendering: 'pixelated' }}
                          />
                        </span>
                        <span className="max-w-full truncate text-center text-[0.62rem] text-mist transition-colors group-hover:text-gold">
                          {gym.leader}
                        </span>
                        <span
                          aria-hidden="true"
                          className="h-1 w-6 rounded-full"
                          style={{ background: tc, opacity: 0.7 }}
                        />
                      </button>
                    )
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <GymModal
        gym={open?.gym || null}
        region={open?.region || null}
        onClose={() => setOpen(null)}
      />
    </section>
  )
}
