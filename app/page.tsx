'use client';

/** Libraries (*/
import { Monda } from 'next/font/google';

/** Functional **/
import Gear from '@components/Gear';
import Result from '@components/Result';
import { useFormulaStore } from '@store/useFormulaStore';
import { gears } from '@components/Gear/Gear.utils';
import useDiceRoll from './page.useDiceRoll';
import InfoActions from '@components/InfoActions';

const monda = Monda({
  subsets: ['latin'],
  weight: '400',
});

const Home = () => {
  const { result } = useFormulaStore();

  const { isRolling, rollDice } = useDiceRoll();

  return (
    <main
      className={`home prose ${monda.className} max-w-full
      w-full h-full flex flex-col items-stretch
      md:flex-row`}
    >
      <div className="home__result relative flex flex-1 bg-white items-center justify-center max-w-full overflow-hidden">
        <InfoActions />
        <Result isRolling={isRolling} result={result} />
      </div>
      <div className="home__gears flex flex-col min-h-[calc(50%+5rem)] md:flex-1">
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
