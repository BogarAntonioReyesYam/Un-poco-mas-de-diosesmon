import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { TYPES_BY_ID, typeEs, typeColor, spriteSmall } from '../data/pokemonTypes'

function PokeCard({ name, id, legendary, region, highlighted, onClose }) {
  const types = TYPES_BY_ID[String(id)] || []
  return (
    <Link
      to={`/pokemon/${id}`}
      state={{ regionId: region.id }}
      data-poke-id={id}
      onClick={onClose}
      className={`group flex flex-col items-center rounded-xl border p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-golddim hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)] ${
        highlighted
          ? 'border-gold bg-gold/[0.06] shadow-[0_0_24px_rgba(232,179,61,0.22)]'
          : 'border-line bg-panel'
      }`}
    >
      <img
        src={spriteSmall(id)}
        alt={name}
        width="96"
        height="96"
        loading="lazy"
        className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
        style={{ imageRendering: 'pixelated' }}
      />
      <p className="mt-2 font-mono text-[0.68rem] tracking-[0.15em] text-mist">
        N.º {String(id).padStart(4, '0')}
      </p>
      <h4 className={`text-base font-semibold capitalize ${legendary ? 'text-gold' : 'text-ink'}`}>
        {name}
      </h4>
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
}

export default function PokedexModal({ region, highlightId, onClose }) {
  useEffect(() => {
    if (!region) return undefined
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [region, onClose])

  useEffect(() => {
    if (!region || !highlightId) return undefined
    const t = setTimeout(() => {
      document.querySelector(`[data-poke-id="${highlightId}"]`)
        ?.scrollIntoView({ block: 'center', behavior: 'instant' })
    }, 120)
    return () => clearTimeout(t)
  }, [region, highlightId])

  return (
    <AnimatePresence>
      {region && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto bg-night/90 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="mx-auto max-w-4xl rounded-2xl border border-line bg-night p-5 shadow-[0_30px_80px_rgba(0,0,0,0.6)] sm:p-8"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`Pokédex de ${region.name}`}
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-bold">
                  {region.name} <span className="font-mono text-sm text-gold">{region.gen}</span>
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-mist">
                  {region.count} pokémon · Región activa
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Cerrar Pokédex"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line text-mist transition hover:border-gold hover:text-gold"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4">
              {region.species.map((name, idx) => {
                const id = region.offset + idx + 1
                return (
                  <PokeCard
                    key={name}
                    name={name}
                    id={id}
                    legendary={region.legendaries.has(name)}
                    region={region}
                    highlighted={String(id) === String(highlightId)}
                    onClose={onClose}
                  />
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
