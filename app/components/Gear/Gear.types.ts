export type GearProps = React.HTMLAttributes<HTMLButtonElement> & {
  name: string;
  numbersOnDice: GearRange[];
};

export type GearRange = {
  number: number;
  probability: number;
};
