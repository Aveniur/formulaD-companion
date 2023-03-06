'use client';

/** Libraries (*/
import { Monda } from 'next/font/google';
import { useRef, useState } from 'react';

/** Functional **/
import Gear from 'components/Gear';
import Result from 'components/Result';
import { useFormulaStore } from 'store/useFormulaStore';
import { GearRange } from 'components/Gear/Gear.types';
import { gears } from 'components/Gear/Gear.utils';
import { roundNumber } from 'utils/functions';

const monda = Monda({
  subsets: ['latin'],
  weight: '400',
});

const Home = () => {
  const { result, setResult } = useFormulaStore();

  const [isRolling, setIsRolling] = useState(false);

  const diceTimeout = useRef<NodeJS.Timeout | null>(null);

  const rollDice = (numbersOnDice: GearRange[]) => {
    diceTimeout.current && clearTimeout(diceTimeout.current);
    setIsRolling(true);

    const accumulatedProbabilities: number[] = [];
    numbersOnDice.reduce((acc, curr) => {
      accumulatedProbabilities.push(roundNumber(acc + curr.probability, 2));
      return acc + curr.probability;
    }, 0);

    const randomNumber = Math.random();

    let randomIndex = accumulatedProbabilities.findIndex((probability) => {
      return randomNumber <= probability;
    });

    while (randomIndex === -1) {
      const newRandom = Math.random();
      randomIndex = accumulatedProbabilities.findIndex((probability) => {
        return newRandom <= probability;
      });
    }

    setResult(numbersOnDice[randomIndex].number);
    diceTimeout.current = setTimeout(() => setIsRolling(false), 500);
  };

  return (
    <main
      className={`home ${monda.className}
      border-2 border-red-600
      w-full h-full flex flex-col items-stretch
      md:flex-row`}
    >
      <div className="home__result flex flex-1 bg-blue-400">
        <Result isRolling={isRolling} result={result} />
      </div>
      <div className="home__gears flex flex-col md:flex-1">
        {Object.keys(gears).map((key: string) => {
          const gear = gears[key as keyof typeof gears];

          return (
            <Gear
              key={gear.name}
              name={gear.name.toUpperCase()}
              numbersOnDice={gear.numbersOnDice}
              className={gear.style}
              onClick={() => rollDice(gear.numbersOnDice)}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Home;
