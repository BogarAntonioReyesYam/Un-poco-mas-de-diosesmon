import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onDone }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false)
      setTimeout(() => onDone?.(), 700)
    }, 4200)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 0.61, 0.36, 1] }}
          style={{
            background:
              'radial-gradient(ellipse 110% 75% at 50% 18%, #1e4d2e 0%, #143322 28%, #0d2116 55%, #070f0b 100%)',
          }}
        >
          {/* holo corners — solo líneas finas sin relleno */}
          <span className="pointer-events-none absolute left-5 top-5 h-8 w-8 border-l border-t border-gold/35 rounded-tl-md" />
          <span className="pointer-events-none absolute right-5 top-5 h-8 w-8 border-r border-t border-gold/35 rounded-tr-md" />
          <span className="pointer-events-none absolute bottom-5 left-5 h-8 w-8 border-b border-l border-gold/25 rounded-bl-md" />
          <span className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 border-b border-r border-gold/25 rounded-br-md" />

          {/* partículas */}
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className="pointer-events-none absolute rounded-full"
              style={{
                left: `${8 + (i * 53) % 84}%`,
                top: `${12 + (i * 37) % 70}%`,
                width: i % 4 === 0 ? 2.5 : 1.2,
                height: i % 4 === 0 ? 2.5 : 1.2,
                background: i % 2 === 0 ? 'rgba(232,179,61,0.85)' : 'rgba(255,255,255,0.6)',
                boxShadow: i % 4 === 0 ? '0 0 5px currentColor' : 'none',
                opacity: 0.3 + (i % 3) * 0.15,
                animation: `rise ${7 + (i % 5) * 1.5}s linear infinite`,
                animationDelay: `${-(i * 0.7)}s`,
              }}
            />
          ))}

          {/* hierba inferior */}
          <svg
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 w-full h-[58px] opacity-60"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 L0,32 L14,14 L26,34 L38,8 L50,30 L62,16 L74,36 L86,10 L98,32 L110,18 L122,38 L134,12 L146,32 L158,18 L170,36 L182,10 L194,30 L206,16 L218,36 L230,12 L242,32 L254,20 L266,38 L278,14 L290,32 L302,18 L314,36 L326,8 L338,30 L350,16 L362,36 L374,12 L386,32 L398,18 L410,38 L422,14 L434,30 L446,18 L458,36 L470,10 L482,30 L494,16 L506,36 L518,12 L530,32 L542,20 L554,38 L566,14 L578,30 L590,8 L602,32 L614,18 L626,36 L638,12 L650,32 L662,18 L674,36 L686,10 L698,30 L710,16 L722,36 L734,14 L746,32 L758,20 L770,38 L782,12 L794,30 L806,18 L818,36 L830,10 L842,30 L854,16 L866,36 L878,14 L890,32 L902,20 L914,38 L926,12 L938,30 L950,18 L962,36 L974,10 L986,30 L998,16 L1010,36 L1022,12 L1034,32 L1046,20 L1058,38 L1070,14 L1082,30 L1094,18 L1106,36 L1118,12 L1130,32 L1142,18 L1154,36 L1166,10 L1178,30 L1190,16 L1200,30 L1200,60 Z"
              fill="#0f2e1a"
            />
          </svg>

          {/* vignette */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 55%, rgba(0,0,0,0.5) 100%)',
            }}
          />

          {/* centro: Rayquaza animado */}
          <div className="relative flex flex-col items-center">
            <motion.div
              className="relative"
              initial={{ y: 16, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1], delay: 0.15 }}
              style={{ animation: 'float-loop 2.8s ease-in-out infinite' }}
            >
              {/* glow detrás */}
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[22px]"
                style={{
                  width: 160,
                  height: 120,
                  background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(16,185,129,0.35) 0%, transparent 70%)',
                }}
              />
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/384.gif"
                alt=""
                className="relative h-28 w-28 object-contain"
                style={{
                  imageRendering: 'pixelated',
                  filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.5)) drop-shadow(0 0 14px rgba(16,185,129,0.45))',
                  transform: 'scale(2.4)',
                }}
              />
            </motion.div>

            <motion.h1
              className="mt-10 font-display text-[1.35rem] font-bold tracking-[0.24em] text-white/70"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              DIOSESMON
            </motion.h1>

            <div className="mt-5 h-1.5 w-40 rounded-full bg-white/10 p-0.5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-golddim via-gold to-[#fff2b8] shadow-[0_0_8px_rgba(232,179,61,0.5)]"
                style={{ width: '0%', animation: 'loading-bar 3.6s cubic-bezier(0.22,0.61,0.36,1) forwards' }}
              />
            </div>
            <span className="mt-2 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-white/35">
              Cargando mundo
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
