export const BADGE_URL = (n) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/${n}.png`

export const GYM_REGIONS = [
  {
    id: 'kanto',
    name: 'Kanto',
    gen: 'GEN I',
    badgeStart: 1,
    gyms: [
      { leader: 'Brock', type: 'rock', pokemon: [95, 74, 140] },
      { leader: 'Misty', type: 'water', pokemon: [61, 72, 121, 171] },
      { leader: 'Lt. Surge', type: 'electric', pokemon: [101, 125, 82, 26, 181] },
      { leader: 'Erika', type: 'grass', pokemon: [189, 103, 3, 154, 47] },
      { leader: 'Koga', type: 'poison', pokemon: [94, 169, 73, 49, 110, 34] },
      { leader: 'Sabrina', type: 'psychic', pokemon: [124, 80, 26, 202, 196, 65] },
      { leader: 'Blaine', type: 'fire', pokemon: [38, 6, 229, 157, 78, 59] },
      { leader: 'Giovanni', type: 'ground', pokemon: [248, 53, 115, 195, 232, 34] },
    ],
  },
  {
    id: 'johto',
    name: 'Johto',
    gen: 'GEN II',
    badgeStart: 9,
    gyms: [
      { leader: 'Falkner', type: 'flying', pokemon: [227, 130, 18, 142, 6, 149] },
      { leader: 'Bugsy', type: 'bug', pokemon: [15, 123, 127, 205, 212, 214] },
      { leader: 'Whitney', type: 'normal', pokemon: [241, 235, 115, 233, 40, 242] },
      { leader: 'Morty', type: 'ghost', pokemon: [169, 200, 94, 429, 979, 157] },
      { leader: 'Chuck', type: 'fighting', pokemon: [68, 62, 57, 106, 237, 107] },
      { leader: 'Jasmine', type: 'steel', pokemon: [227, 462, 51, 212, 205, 208] },
      { leader: 'Pryce', type: 'ice', pokemon: [131, 473, 87, 221, 124, 91] },
      { leader: 'Clair', type: 'dragon', pokemon: [6, 227, 130, 230, 149, 142] },
    ],
  },
  {
    id: 'hoenn',
    name: 'Hoenn',
    gen: 'GEN III',
    badgeStart: 17,
    gyms: [
      { leader: 'Roxanne', type: 'rock', pokemon: [74, 75, 299] },
      { leader: 'Brawly', type: 'fighting', pokemon: [66, 296] },
      { leader: 'Wattson', type: 'electric', pokemon: [81, 100, 82, 310] },
      { leader: 'Flannery', type: 'fire', pokemon: [322, 218, 323, 324] },
      { leader: 'Norman', type: 'normal', pokemon: [288, 289] },
      { leader: 'Winona', type: 'flying', pokemon: [333, 357, 279, 227, 334] },
      { leader: 'Tate & Liza', type: 'psychic', pokemon: [337, 338] },
      { leader: 'Wallace', type: 'water', pokemon: [370, 340, 365, 119, 350] },
    ],
  },
]
