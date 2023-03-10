export type StoreState = {
  result: number | null;
  prevResults: number[];
  setResult: (result: number | null) => void;
  setPrevResults: (prevResults: number[]) => void;
};
