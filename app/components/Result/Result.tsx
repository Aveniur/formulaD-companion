import { ResultProps } from './Result.types';

const Result = (props: ResultProps) => {
  const { isRolling, result } = props;
  return (
    <div
      className={`result flex items-center justify-center 
      w-[150px] h-[150px] 
      box-border border-4 border-black rounded-xl
      shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]
      md:scale-[1.5]
      lg:scale-[2]`}
    >
      {isRolling ? (
        <div>Rolling...</div>
      ) : (
        <h1 className="result__number font-bold m-0 text-[64px]">{result}</h1>
      )}
    </div>
  );
};

export default Result;
