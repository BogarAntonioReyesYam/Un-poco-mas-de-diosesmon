import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS, LINKS } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = NAV_ITEMS.map((i) => document.querySelector(i.href)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-night/85 backdrop-blur-xl">
      <nav className="wrap flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2.5 font-display text-lg font-bold tracking-wide">
          <span className="anim-pulse-dot h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_12px_#E8B33D]" aria-hidden="true" />
          DIOSESMON
        </a>

        <div className="hidden items-center gap-7 text-sm text-mist md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:text-gold hover:after:scale-x-100 ${
                active === item.href ? 'text-gold after:scale-x-100' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3.5">
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-md bg-gold px-4 py-2 text-sm font-semibold text-[#1A1204] transition hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,179,61,0.35)] sm:inline-block"
          >
            Discord
          </a>
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg border border-line md:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="absolute inset-x-0 top-full border-b border-line bg-night md:hidden">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-t border-line px-6 py-3.5 text-mist transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
