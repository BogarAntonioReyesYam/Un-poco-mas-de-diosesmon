import { ArrowRight } from 'lucide-react'
import FadeIn, { SectionHead } from './FadeIn'
import { STEPS } from '../data/content'

export default function Steps() {
  return (
    <section id="empezar" className="py-24">
      <div className="wrap">
        <SectionHead eyebrow="Primeros pasos" title="Empieza en 3 minutos">
          Compatible con Minecraft Java 1.21. El proceso completo, gratis, desde la instalación hasta tu
          primer Pokémon.
        </SectionHead>

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.12}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-panel p-7 transition duration-300 hover:-translate-y-1.5 hover:border-golddim hover:shadow-[0_18px_46px_rgba(0,0,0,0.35)]">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.07] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <span className="font-mono text-sm text-golddim transition-colors group-hover:text-gold">
                    {step.num}
                  </span>
                  <h3 className="mt-3.5 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-mist">{step.body}</p>
                  {step.link && (
                    <a
                      href={step.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3.5 inline-flex items-center gap-1 text-sm font-semibold text-gold transition-all hover:gap-2"
                    >
                      {step.link.label} <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
