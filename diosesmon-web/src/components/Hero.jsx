import { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { LINKS } from '../data/content'

const lineVariants = {
  hidden: { y: '112%' },
  visible: (i) => ({
    y: 0,
    transition: { duration: 0.9, delay: 0.18 + i * 0.14, ease: [0.22, 0.61, 0.36, 1] },
  }),
}

export default function Hero() {
  const { scrollY } = useScroll()
  const yBlobs = useTransform(scrollY, [0, 700], [0, 130])
  const yRings = useTransform(scrollY, [0, 700], [0, 220])

  const particles = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 3,
        opacity: 0.25 + Math.random() * 0.4,
        duration: 9 + Math.random() * 12,
        delay: -Math.random() * 18,
      })),
    [],
  )

  return (
    <section className="relative overflow-hidden pb-16 pt-24 text-center">
      {/* Depth 0: rejilla */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(159,194,184,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(159,194,184,0.05) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, black 30%, transparent 75%)',
        }}
      />

      {/* Depth 1: blobs atmosféricos */}
      <motion.div style={{ y: yBlobs }} aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="anim-drift absolute -left-32 -top-24 h-[440px] w-[440px] rounded-full bg-gold/15 blur-[90px]" />
        <div className="anim-drift-rev absolute -bottom-20 -right-32 h-[400px] w-[400px] rounded-full bg-ember/10 blur-[90px]" />
      </motion.div>

      {/* Depth 2: anillos + partículas */}
      <motion.div style={{ y: yRings }} aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="anim-spin-slow absolute -top-40 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full border border-dashed border-gold/20" />
        <div className="anim-spin-slow-rev absolute -bottom-28 -right-16 h-[360px] w-[360px] rounded-full border border-ember/15" />
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              '--po': p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Depth 4: contenido */}
      <div className="wrap relative z-10">
        <motion.p
          className="eyebrow mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Servidor de Cobblemon · Minecraft Java 1.21
        </motion.p>

        <h1 className="font-display text-5xl font-bold leading-[1.04] tracking-tight sm:text-7xl md:text-8xl">
          {['Conviértete', 'en leyenda'].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block bg-gradient-to-b from-white to-[#cfe6de] bg-clip-text text-transparent"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mx-auto mt-6 max-w-xl text-lg text-mist"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Atrapa, entrena y conquista la Liga en el servidor de Cobblemon en español, construido por la
          comunidad de Vegetta y Willyrex.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-3.5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.74 }}
        >
          <a className="btn-primary" href={LINKS.pack} target="_blank" rel="noreferrer">
            Descargar modpack
          </a>
          <a className="btn-ghost" href={LINKS.tienda} target="_blank" rel="noreferrer">
            Ir a la tienda
          </a>
          <a className="btn-ghost" href={LINKS.wiki} target="_blank" rel="noreferrer">
            Ver la wiki
          </a>
        </motion.div>
      </div>
    </section>
  )
}
