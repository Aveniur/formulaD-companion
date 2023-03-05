'use client';
import { Monda } from 'next/font/google';
import Gear from './components/Gear/Gear';
import { gears } from './components/Gear/Gear.utils';

const monda = Monda({
  subsets: ['latin'],
  weight: '400',
});

const Home = () => {
  return (
    <main
      className={`home ${monda.className} 
      border-2 border-red-600 
      w-full h-full flex flex-col items-stretch
      md:flex-row`}
    >
      <div className="home__result flex flex-1 bg-blue-400">Results</div>
      <div className="home__gears flex flex-col md:flex-1">
        {Object.keys(gears).map((key: string) => {
          const gear = gears[key as keyof typeof gears];

          return (
            <Gear
              key={gear.name}
              name={gear.name.toUpperCase()}
              numbersOnDice={gear.numbersOnDice}
              className={gear.style}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Home;
