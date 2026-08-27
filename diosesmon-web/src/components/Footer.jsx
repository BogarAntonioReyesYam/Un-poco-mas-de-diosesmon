import { LINKS } from '../data/content'

const FOOT_LINKS = [
  { href: LINKS.discord, label: 'Discord' },
  { href: LINKS.wiki, label: 'Wiki' },
  { href: LINKS.tienda, label: 'Tienda' },
  { href: LINKS.pack, label: 'Modpack' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="wrap">
        <div className="flex flex-wrap justify-between gap-6">
          <div className="flex items-center gap-2.5 font-display text-lg font-bold tracking-wide">
            <span className="anim-pulse-dot h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_12px_#E8B33D]" aria-hidden="true" />
            DIOSESMON
          </div>
          <div className="flex gap-6 text-sm text-mist">
            {FOOT_LINKS.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-gold">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-7 max-w-2xl text-xs text-[#5C7C74]">
          Página de fans no oficial sobre Diosesmon. Diosesmon no está afiliado, avalado, patrocinado ni
          aprobado por Pokémon, Nintendo, Game Freak, Creatures Inc., Mojang ni Microsoft. Minecraft es una
          marca registrada de Mojang Synergies AB; Pokémon es una marca registrada de Nintendo, Creatures Inc.
          y GAME FREAK inc.
        </p>
      </div>
    </footer>
  )
}
