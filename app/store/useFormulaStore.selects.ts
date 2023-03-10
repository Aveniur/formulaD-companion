/** Functional **/
import { useFormulaStore } from './useFormulaStore';
import { shallow } from 'zustand/shallow';

export const useSelectFormulaStore = () =>
  useFormulaStore(
    ({ result, prevResults, setResult, setPrevResults }) => ({
      result,
      prevResults,
      setResult,
      setPrevResults,
    }),
    shallow,
  );
