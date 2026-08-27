export const SERVER_IP = 'mc.diosesmon.net'

export const LINKS = {
  discord: 'https://discord.gg/diosesmon',
  pack: 'https://pack.diosesmon.net',
  tienda: 'https://tienda.diosesmon.net',
  wiki: 'https://wiki.diosesmon.net',
}

export const TICKER_ITEMS = [
  'Hoenn desbloqueada',
  'Pin exclusivo de Celebi',
  'Liga Pokémon activa',
  'Economía DiosesCoins',
  'Eventos semanales',
  'Comunidad Vegetta & Willyrex',
]

export const STEPS = [
  {
    num: '01',
    title: 'Descarga el modpack',
    body: 'Instálalo en un clic desde CurseForge o Modrinth. Incluye Cobblemon y todos los mods del servidor ya configurados. Hay versión Pro (gama alta) y Lite (equipos más modestos).',
    link: { href: LINKS.pack, label: 'Descargar pack' },
  },
  {
    num: '02',
    title: 'Elige tu inicial',
    body: 'Habla con el NPC de Survival y busca al Profesor en el laboratorio del spawn. Desde ahí, abre la Pokepad, activa un trabajo y revisa el tablero de cazas.',
    link: { href: LINKS.wiki, label: 'Guía inicial completa' },
  },
]

export const GENERATIONS = [
  { num: 'I', name: 'Kanto', status: 'active' },
  { num: 'II', name: 'Johto', status: 'active' },
  { num: 'III', name: 'Hoenn', status: 'active', isNew: true },
  { num: 'IV', name: 'Sinnoh', status: 'soon' },
  { num: 'V', name: 'Teselia', status: 'soon' },
  { num: 'VI+', name: 'Kalos y más', status: 'announced' },
]

const T = { planta: '#78C850', fuego: '#F08030', agua: '#6890F0' }

const startersOf = (p, f, a) => [
  { name: p, type: 'Planta', color: T.planta },
  { name: f, type: 'Fuego', color: T.fuego },
  { name: a, type: 'Agua', color: T.agua },
]

const leg = (names) => new Set(names)

export const REGIONS = [
  {
    id: 'kanto',
    offset: 0,
    name: 'Kanto',
    gen: 'GEN I',
    count: 151,
    starters: startersOf('Bulbasaur', 'Charmander', 'Squirtle'),
    legendaries: leg(['Articuno', 'Zapdos', 'Moltres', 'Mewtwo', 'Mew']),
    species: [
      'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle',
      'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto',
      'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew',
      'Sandslash', 'Nidoran♀', 'Nidorina', 'Nidoqueen', 'Nidoran♂', 'Nidorino', 'Nidoking', 'Clefairy',
      'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom',
      'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian',
      'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath',
      'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel',
      'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro',
      'Magnemite', 'Magneton', "Farfetch'd", 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder',
      'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb',
      'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Lickitung',
      'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon', 'Chansey', 'Tangela', 'Kangaskhan', 'Horsea', 'Seadra',
      'Goldeen', 'Seaking', 'Staryu', 'Starmie', 'Mr. Mime', 'Scyther', 'Jynx', 'Electabuzz', 'Magmar', 'Pinsir',
      'Tauros', 'Magikarp', 'Gyarados', 'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon', 'Porygon',
      'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres',
      'Dratini', 'Dragonair', 'Dragonite', 'Mewtwo', 'Mew',
    ],
  },
  {
    id: 'johto',
    offset: 151,
    name: 'Johto',
    gen: 'GEN II',
    count: 100,
    starters: startersOf('Chikorita', 'Cyndaquil', 'Totodile'),
    legendaries: leg(['Raikou', 'Entei', 'Suicune', 'Lugia', 'Ho-Oh', 'Celebi']),
    species: [
      'Chikorita', 'Bayleef', 'Meganium', 'Cyndaquil', 'Quilava', 'Typhlosion', 'Totodile', 'Croconaw',
      'Feraligatr', 'Sentret', 'Furret', 'Hoothoot', 'Noctowl', 'Ledyba', 'Ledian', 'Spinarak', 'Ariados',
      'Crobat', 'Chinchou', 'Lanturn', 'Pichu', 'Cleffa', 'Igglybuff', 'Togepi', 'Togetic', 'Natu', 'Xatu',
      'Mareep', 'Flaaffy', 'Ampharos', 'Bellossom', 'Marill', 'Azumarill', 'Sudowoodo', 'Politoed', 'Hoppip',
      'Skiploom', 'Jumpluff', 'Aipom', 'Sunkern', 'Sunflora', 'Yanma', 'Wooper', 'Quagsire', 'Espeon', 'Umbreon',
      'Murkrow', 'Slowking', 'Misdreavus', 'Unown', 'Wobbuffet', 'Girafarig', 'Pineco', 'Forretress', 'Dunsparce',
      'Gligar', 'Steelix', 'Snubbull', 'Granbull', 'Qwilfish', 'Scizor', 'Shuckle', 'Heracross', 'Sneasel',
      'Teddiursa', 'Ursaring', 'Slugma', 'Magcargo', 'Swinub', 'Piloswine', 'Corsola', 'Remoraid', 'Octillery',
      'Delibird', 'Mantine', 'Skarmory', 'Houndour', 'Houndoom', 'Kingdra', 'Phanpy', 'Donphan', 'Porygon2',
      'Stantler', 'Smeargle', 'Tyrogue', 'Hitmontop', 'Smoochum', 'Elekid', 'Magby', 'Miltank', 'Blissey',
      'Raikou', 'Entei', 'Suicune', 'Larvitar', 'Pupitar', 'Tyranitar', 'Lugia', 'Ho-Oh', 'Celebi',
    ],
  },
  {
    id: 'hoenn',
    offset: 252,
    name: 'Hoenn',
    gen: 'GEN III',
    count: 135,
    isNew: true,
    starters: startersOf('Treecko', 'Torchic', 'Mudkip'),
    legendaries: leg(['Regirock', 'Regice', 'Registeel', 'Latias', 'Latios', 'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys']),
    species: [
      'Treecko', 'Grovyle', 'Sceptile', 'Torchic', 'Combusken', 'Blaziken', 'Mudkip', 'Marshtomp', 'Swampert',
      'Poochyena', 'Mightyena', 'Zigzagoon', 'Linoone', 'Wurmple', 'Silcoon', 'Beautifly', 'Cascoon', 'Dustox',
      'Lotad', 'Lombre', 'Ludicolo', 'Seedot', 'Nuzleaf', 'Shiftry', 'Taillow', 'Swellow', 'Wingull', 'Pelipper',
      'Ralts', 'Kirlia', 'Gardevoir', 'Surskit', 'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth',
      'Slaking', 'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud', 'Makuhita', 'Hariyama',
      'Azurill', 'Nosepass', 'Skitty', 'Delcatty', 'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite',
      'Medicham', 'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise', 'Roselia', 'Gulpin',
      'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer', 'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
      'Spinda', 'Trapinch', 'Vibrava', 'Flygon', 'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
      'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt', 'Baltoy', 'Claydol', 'Lileep',
      'Cradily', 'Anorith', 'Armaldo', 'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette', 'Duskull',
      'Dusclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut', 'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein',
      'Clamperl', 'Huntail', 'Gorebyss', 'Relicanth', 'Luvdisc', 'Bagon', 'Shelgon', 'Salamence', 'Beldum',
      'Metang', 'Metagross', 'Regirock', 'Regice', 'Registeel', 'Latias', 'Latios', 'Kyogre', 'Groudon',
      'Rayquaza', 'Jirachi', 'Deoxys',
    ],
  },
]

export const RANKS = ['Entrenador', 'As', 'Líder', 'Maestro']

export const RANK_COLORS = {
  Entrenador: { text: '#E37B6B', bg: 'rgba(227,123,107,0.12)' },
  As: { text: '#6BAEE3', bg: 'rgba(107,174,227,0.12)' },
  Líder: { text: '#E8B33D', bg: 'rgba(232,179,61,0.14)' },
  Maestro: { text: '#C08BE3', bg: 'rgba(192,139,227,0.14)' },
}

export const RANK_TABLE = {
  head: RANKS,
  rows: [
    { label: 'DCoins incluidos', values: ['100', '150', '200', '300'] },
    { label: 'Espera de crianza', values: ['25 min', '20 min', '15 min', '10 min'] },
    { label: 'Espera de Wondertrade', values: ['25 min', '25 min', '25 min', '20 min'] },
    { label: 'Límite de homes', values: ['3', '4', '5', '7'] },
    { label: 'Slots de crianza', values: ['2', '2', '2', '4'] },
    { label: 'Mochila virtual', values: ['9 espacios', '27 espacios', '36 espacios', '45 espacios'] },
    { label: 'Tasa de GTS', values: ['10%', '8%', '6%', '4%'] },
  ],
}

export const KITS = [
  {
    rank: 'Entrenador',
    desc: 'El primer paso: quita la cola y te da identidad en el servidor.',
    perks: ['Acceso sin cola', 'Kit único de Survival', 'Cosmético exclusivo', 'Prefijo en chat, tab y scoreboard', 'Rango VIP en Discord'],
    dcoins: '+100 DCoins',
  },
  {
    rank: 'As',
    desc: 'Todo lo del Entrenador, más libertad para quedarte AFK.',
    perks: ['Todo lo de Entrenador', 'AFK sin ser expulsado', 'Comandos: /back, /hat, /afk', 'Mochila de 27 espacios'],
    dcoins: '+150 DCoins',
  },
  {
    rank: 'Líder',
    desc: 'Suma la /recompensa única del rango y comandos de utilidad.',
    perks: ['Todo lo de As', '/recompensa exclusiva', '/hatch, /enderchest, /near, /feed', 'Mochila de 36 espacios'],
    dcoins: '+200 DCoins',
  },
  {
    rank: 'Maestro',
    desc: 'El rango definitivo: desbloquea todos los comandos del servidor.',
    perks: ['Todos los comandos', 'No pierdes experiencia al morir', '4 slots de crianza', 'Tasa de GTS más baja: 4%'],
    dcoins: '+300 DCoins',
  },
]

export const COIN_USES = [
  'Cosméticos y personalización de avatar',
  'Kits especiales de progreso',
  'Mejoras competitivas para tu equipo',
  'Mobiliario para tu base',
]

export const NAV_ITEMS = [
  { href: '#empezar', label: 'Cómo empezar' },
  { href: '#generaciones', label: 'Generaciones' },
  { href: '#gyms', label: 'Gimnasios' },
  { href: '#rangos', label: 'Rangos & kits' },
  { href: '#coins', label: 'DiosesCoins' },
]

const NAME_BY_ID = {}
REGIONS.forEach((r) => r.species.forEach((name, i) => { NAME_BY_ID[r.offset + i + 1] = name }))
// extras fuera de 1-386 usados en gimnasios
Object.assign(NAME_BY_ID, { 429: 'Mismagius', 462: 'Magnezone', 473: 'Mamoswine', 979: 'Annihilape' })
export const nameById = (id) => NAME_BY_ID[id] || `#${id}`
