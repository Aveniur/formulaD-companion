import { GearProps } from './Gear.types';

const Gear = (props: GearProps) => {
  const { className, name, numbersOnDice, ...divProps } = props;
  return (
    <div
      className={`gear w-full p-2 flex flex-col text-center items-center justify-center md:flex-1 ${className}`}
      {...divProps}
    >
      <h5 className="gear__title w-full flex justify-center text-sm md:text-base">
        {name}
      </h5>
      <p className="gear__range w-full flex justify-center text-sm md:text-base">
        {`${numbersOnDice[0].number} - ${
          numbersOnDice[numbersOnDice.length - 1].number
        }`}
      </p>
    </div>
  );
};

export default Gear;
