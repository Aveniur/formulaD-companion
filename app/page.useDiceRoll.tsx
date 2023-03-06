/** Libraries **/
import { useRef, useState } from 'react';

/** Functional **/
import { useFormulaStore } from '@store/useFormulaStore';
import { GearRange } from '@components/Gear/Gear.types';
import { roundNumber } from '@utils/functions';

const useDiceRoll = () => {
  const { setResult } = useFormulaStore();
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
  return {
    isRolling,
    rollDice,
  };
};

export default useDiceRoll;
