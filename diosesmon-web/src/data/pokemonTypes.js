import typesJson from './types.json'

export const TYPES_BY_ID = Object.fromEntries(
  Object.entries(typesJson).map(([id, types]) => [id, Array.isArray(types) ? types : [types]]),
)

export const TYPE_ES = {
  normal: 'Normal', fire: 'Fuego', water: 'Agua', electric: 'Eléctrico', grass: 'Planta',
  ice: 'Hielo', fighting: 'Lucha', poison: 'Veneno', ground: 'Tierra', flying: 'Volador',
  psychic: 'Psíquico', bug: 'Bicho', rock: 'Roca', ghost: 'Fantasma', dragon: 'Dragón',
  dark: 'Siniestro', steel: 'Acero', fairy: 'Hada',
}

export const TYPE_COLOR = {
  normal: '#A8A878', fire: '#F08030', water: '#6890F0', electric: '#F8D030', grass: '#78C850',
  ice: '#98D8D8', fighting: '#C03028', poison: '#A040A0', ground: '#E0C068', flying: '#A890F0',
  psychic: '#F85888', bug: '#A8B820', rock: '#B8A038', ghost: '#705898', dragon: '#7038F8',
  dark: '#705848', steel: '#B8B8D0', fairy: '#EE99AC',
}

export const typeEs = (t) => TYPE_ES[t] || t
export const typeColor = (t) => TYPE_COLOR[t] || '#888888'

export const spriteSmall = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

export const spriteArt = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
