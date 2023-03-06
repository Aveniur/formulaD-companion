import { create } from 'zustand';
import { StoreState } from './store.types';

export const useFormulaStore = create<StoreState>((set) => ({
  result: null,
  setResult: (result: number | null) => set({ result }),
}));
