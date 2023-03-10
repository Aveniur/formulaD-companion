import { create } from 'zustand';
import { StoreState } from './store.types';

export const useFormulaStore = create<StoreState>((set) => ({
  result: null,
  prevResults: [],
  setResult: (result: number | null) => set(() => ({ result }), false),
  setPrevResults: (prevResults: number[]) =>
    set(() => ({ prevResults }), false),
}));
