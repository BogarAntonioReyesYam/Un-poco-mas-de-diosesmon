import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Coins } from 'lucide-react'
import FadeIn, { SectionHead } from './FadeIn'
import { KITS_EXCLUSIVOS } from '../data/kits'
import { spriteSmall } from '../data/pokemonTypes'

const KIT_POKE_ID = { eevee: 133, greninja: 658, mewtwo: 150, rayquaza: 384, darkrai: 491, groudon: 383 }

function KitModal({ kit, onClose }) {
  useEffect(() => {
    if (!kit) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [kit, onClose])

  return (
    <AnimatePresence>
      {kit && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto bg-night/90 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="mx-auto max-w-3xl rounded-2xl border border-line bg-panel p-6 sm:p-8"
            initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.97 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog" aria-modal="true"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-bold">{kit.name}</h3>
                <p className="font-mono text-xs uppercase tracking-wider text-mist">{kit.price.toLocaleString()} DiosesCoins · Kit exclusivo</p>
              </div>
              <button onClick={onClose} aria-label="Cerrar" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line text-mist hover:border-gold hover:text-gold"><X size={18} /></button>
            </div>

            <div className="space-y-6">
              {(kit.sections || [{ title: 'Contenido', items: kit.items?.map(i => typeof i === 'string' ? { name: i } : i) || [] }]).map((sec) => (
                <div key={sec.title}>
                  <h4 className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-gold">◈ {sec.title}</h4>
                  <div className="space-y-1.5">
                    {sec.items.map((it, i) => (
                      <div key={i} className="flex flex-col rounded-lg border border-line bg-night/40 px-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                        <span className="text-sm font-medium text-ink">{it.name}</span>
                        {it.ench && <span className="font-mono text-xs text-mist">{it.ench}</span>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between rounded-xl border border-gold/30 bg-gold/10 px-4 py-3">
              <span className="font-mono text-sm font-bold text-gold inline-flex items-center gap-2"><Coins size={16} />{kit.price.toLocaleString()} DiosesCoins</span>
              <span className="font-mono text-xs text-mist">En el juego: /kits</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function KitsExclusivos() {
  const [open, setOpen] = useState(null)
  return (
    <section id="kits-exclusivos" className="py-24">
      <div className="wrap">
        <SectionHead eyebrow="Kits exclusivos" title="Kits exclusivos">
          Equipamiento único con objetos que rotan cada semana. Se compran con DiosesCoins dentro del juego.
        </SectionHead>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {KITS_EXCLUSIVOS.map((kit, i) => (
            <FadeIn key={kit.id} delay={i * 0.08}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
                <div className="flex h-40 items-center justify-center p-6" style={{ background: `linear-gradient(135deg, ${kit.color}18, ${kit.accent}10)` }}>
                  <img
                    src={spriteSmall(KIT_POKE_ID[kit.id] || 25)}
                    alt={kit.name}
                    width="96"
                    height="96"
                    loading="lazy"
                    className="h-24 w-24 object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-display font-bold">{kit.name}</h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 font-mono text-sm font-bold text-gold"><Coins size={14} />{kit.price.toLocaleString()}</p>
                  <button onClick={() => setOpen(kit)} className="mt-3 w-full rounded-lg bg-[#7ab800] px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#8ed000]">Ver contenido</button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="mt-4 text-center font-mono text-xs text-mist">Kits exclusivos con objetos únicos. Cambian en 18h 7m. Consíguelos en el juego con <span className="text-gold">/kits</span></p>
      </div>
      <KitModal kit={open} onClose={() => setOpen(null)} />
    </section>
  )
}
