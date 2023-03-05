export type GearProps = React.HTMLAttributes<HTMLDivElement> & {
  name: string;
  numbersOnDice: GearRange[];
};

export type GearRange = {
  number: number;
  probability: number;
};
