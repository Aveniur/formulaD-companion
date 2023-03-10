const d20 = new Array(20).fill(0).map((_, index: number) => index + 1);

export const gears = {
  1: {
    name: 'Gear 1',
    style: 'bg-gear1 text-black',
    numbersOnDice: [
      { number: 1, probability: 2 / 4 },
      { number: 2, probability: 2 / 4 },
    ],
  },
  2: {
    name: 'Gear 2',
    style: 'bg-gear2 text-white',
    numbersOnDice: [
      { number: 2, probability: 1 / 6 },
      { number: 3, probability: 2 / 6 },
      { number: 4, probability: 3 / 6 },
    ],
  },
  3: {
    name: 'Gear 3',
    style: 'bg-gear3 text-white',
    numbersOnDice: [
      { number: 4, probability: 1 / 8 },
      { number: 5, probability: 1 / 8 },
      { number: 6, probability: 2 / 8 },
      { number: 7, probability: 2 / 8 },
      { number: 8, probability: 2 / 8 },
    ],
  },
  4: {
    name: 'Gear 4',
    style: 'bg-gear4 text-white',
    numbersOnDice: [
      { number: 7, probability: 2 / 12 },
      { number: 8, probability: 2 / 12 },
      { number: 9, probability: 2 / 12 },
      { number: 10, probability: 2 / 12 },
      { number: 11, probability: 2 / 12 },
      { number: 12, probability: 2 / 12 },
    ],
  },
  5: {
    name: 'Gear 5',
    style: 'bg-gear5 text-white',
    numbersOnDice: [
      { number: 11, probability: 2 / 20 },
      { number: 12, probability: 2 / 20 },
      { number: 13, probability: 2 / 20 },
      { number: 14, probability: 2 / 20 },
      { number: 15, probability: 2 / 20 },
      { number: 16, probability: 2 / 20 },
      { number: 17, probability: 2 / 20 },
      { number: 18, probability: 2 / 20 },
      { number: 19, probability: 2 / 20 },
      { number: 20, probability: 2 / 20 },
    ],
  },
  6: {
    name: 'Gear 6',
    style: 'bg-gear6 text-white',
    numbersOnDice: [
      { number: 21, probability: 3 / 30 },
      { number: 22, probability: 3 / 30 },
      { number: 23, probability: 3 / 30 },
      { number: 24, probability: 3 / 30 },
      { number: 25, probability: 3 / 30 },
      { number: 26, probability: 3 / 30 },
      { number: 27, probability: 3 / 30 },
      { number: 28, probability: 3 / 30 },
      { number: 29, probability: 3 / 30 },
      { number: 30, probability: 3 / 30 },
    ],
  },
  damage: {
    name: 'Damage',
    style: 'bg-black text-white',
    numbersOnDice: d20.map((number) => ({ number, probability: 1 / 20 })),
  },
};
