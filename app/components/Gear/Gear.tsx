import { GearProps } from './Gear.types';

const Gear = (props: GearProps) => {
  const { className, name, numbersOnDice, ...buttonProps } = props;
  return (
    <button
      className={`gear w-full p-2 flex flex-col text-center items-center justify-center md:hover:opacity-90 
      ${name === 'DAMAGE' ? 'flex-[1.5] md:flex-[1.5]' : 'flex-1 md:flex-1'}
      ${className}`}
      {...buttonProps}
    >
      <h5 className="gear__title w-full flex justify-center text-sm md:text-lg">
        {name}
      </h5>
      <h5 className="gear__range w-full flex justify-center text-sm md:text-lg">
        {`${numbersOnDice[0].number} - ${
          numbersOnDice[numbersOnDice.length - 1].number
        }`}
      </h5>
    </button>
  );
};

export default Gear;
