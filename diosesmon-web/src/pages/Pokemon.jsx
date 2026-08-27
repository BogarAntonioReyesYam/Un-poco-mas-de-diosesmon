import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Weight, Ruler, Hash, Swords, TrendingUp } from 'lucide-react'
import { typeEs, typeColor, spriteArt } from '../data/pokemonTypes'
import { COMPETITIVE, ITEM_ES, NATURE_ES, NATURE_COLOR } from '../data/competitive'

const STAT_ES = {
  hp: 'PS', attack: 'Ataque', defense: 'Defensa', 'special-attack': 'At. Esp.',
  'special-defense': 'Def. Esp.', speed: 'Velocidad',
}

export default function Pokemon() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  const goBack = () => {
    if (window.history.length > 1) navigate(-1)
    else navigate('/')
  }

  useEffect(() => {
    let alive = true
    setData(null)
    setError(false)
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error('not found')
        return r.json()
      })
      .then((json) => { if (alive) setData(json) })
      .catch(() => { if (alive) setError(true) })
    return () => { alive = false }
  }, [id])

  const artwork = spriteArt(id)

  return (
    <main className="wrap flex min-h-screen flex-col items-center justify-center py-16">
      <button
        onClick={goBack}
        className="mb-8 inline-flex items-center gap-2 self-start rounded-lg border border-line px-4 py-2 text-sm text-mist transition hover:border-gold hover:text-gold"
      >
        <ArrowLeft size={16} /> Volver
      </button>

      {error && (
        <div className="card p-10 text-center text-mist">
          No se pudo cargar este Pokémon. Comprueba tu conexión e inténtalo de nuevo.
        </div>
      )}

      {!data && !error && (
        <div className="card flex h-96 w-full max-w-2xl animate-pulse items-center justify-center">
          <span className="font-mono text-sm uppercase tracking-widest text-mist">Cargando Pokédex…</span>
        </div>
      )}

      {data && (
        <motion.article
          key={id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-line bg-panel"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.07]"
            style={{
              background: `radial-gradient(circle at 50% 20%, ${typeColor(data.types[0].type.name)}, transparent 65%)`,
            }}
          />

          <div className="relative flex flex-col items-center gap-2 border-b border-line p-8 text-center">
            <span className="font-mono text-xs tracking-[0.2em] text-mist">
              <Hash size={11} className="inline" aria-hidden="true" />
              {String(data.id).padStart(4, '0')}
            </span>
            <img
              src={artwork}
              alt={data.name}
              width="220"
              height="220"
              loading="eager"
              className="anim-float drop-shadow-[0_16px_32px_rgba(0,0,0,0.45)]"
            />
            <h1 className="font-display text-3xl font-bold capitalize">{data.name}</h1>
            <div className="mt-1 flex flex-wrap justify-center gap-2">
              {data.types.map((t) => {
                const es = typeEs(t.type.name)
                const c = typeColor(t.type.name)
                return (
                  <span
                    key={t.slot}
                    className="rounded-full px-3 py-1 font-mono text-xs uppercase tracking-wider"
                    style={{ background: `${c}26`, color: c, border: `1px solid ${c}66` }}
                  >
                    {es}
                  </span>
                )
              })}
            </div>
          </div>

          <div className="relative grid gap-8 p-8 sm:grid-cols-[1fr_1.2fr]">
            <div className="flex flex-col gap-3 text-sm text-mist">
              <p className="inline-flex items-center gap-2">
                <Ruler size={15} className="text-gold" aria-hidden="true" />
                Altura: <strong className="text-ink">{(data.height / 10).toFixed(1)} m</strong>
              </p>
              <p className="inline-flex items-center gap-2">
                <Weight size={15} className="text-gold" aria-hidden="true" />
                Peso: <strong className="text-ink">{(data.weight / 10).toFixed(1)} kg</strong>
              </p>
              <p className="inline-flex items-center gap-2">
                <Hash size={15} className="text-gold" aria-hidden="true" />
                Habilidad: <strong className="text-ink capitalize">{data.abilities[0]?.ability.name.replace('-', ' ')}</strong>
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              {data.stats.map((s) => {
                const label = STAT_ES[s.stat.name] || s.stat.name
                const pct = Math.min(100, (s.base_stat / 160) * 100)
                return (
                  <div key={s.stat.name}>
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="text-mist">{label}</span>
                      <span className="font-mono text-ink">{s.base_stat}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded bg-night">
                      <motion.div
                        className="h-full rounded bg-gradient-to-r from-golddim to-gold"
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {COMPETITIVE[id] && (
            <div className="relative border-t border-line p-8">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${typeColor(data.types[0].type.name)}, transparent 65%)`,
                }}
              />
              <div className="relative">
                <h3 className="mb-4 inline-flex items-center gap-2 font-display text-lg font-bold text-gold">
                  <Swords size={18} aria-hidden="true" />
                  Modo Competitivo
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-line bg-night/50 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gold/10">
                        <TrendingUp size={14} className="text-gold" />
                      </span>
                      <span className="font-mono text-[0.65rem] uppercase tracking-wider text-mist">
                        Objeto recomendado
                      </span>
                    </div>
                    <p className="font-display text-xl font-bold text-ink">
                      {ITEM_ES[COMPETITIVE[id].item] || COMPETITIVE[id].item}
                    </p>
                    <p className="mt-1 font-mono text-[0.62rem] text-mist">
                      {COMPETITIVE[id].item}
                    </p>
                  </div>

                  <div className="rounded-xl border border-line bg-night/50 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-lg"
                        style={{ background: `${NATURE_COLOR[COMPETITIVE[id].nature] || '#888'}20` }}
                      >
                        <TrendingUp
                          size={14}
                          style={{ color: NATURE_COLOR[COMPETITIVE[id].nature] || '#888' }}
                        />
                      </span>
                      <span className="font-mono text-[0.65rem] uppercase tracking-wider text-mist">
                        Naturaleza ideal
                      </span>
                    </div>
                    <p className="font-display text-xl font-bold text-ink">
                      {(NATURE_ES[COMPETITIVE[id].nature] || COMPETITIVE[id].nature).split(' (')[0]}
                    </p>
                    <p className="mt-1 font-mono text-[0.62rem] text-mist">
                      {NATURE_ES[COMPETITIVE[id].nature] || COMPETITIVE[id].nature}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.article>
      )}
    </main>
  )
}
