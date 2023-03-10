import { ResultProps } from './Result.types';

const Result = (props: ResultProps) => {
  const { isRolling, result } = props;
  return (
    <div
      className={`result flex items-center justify-center 
      w-[100px] h-[100px] 
      box-border border-4 border-black rounded-xl
      prose prose-h1:text-[48px] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]
      scale-90
      md:scale-[1.5]
      lg:scale-[2.25]`}
    >
      {isRolling ? (
        <div>Rolling...</div>
      ) : (
        <h1 className="result__number m-0">{result}</h1>
      )}
    </div>
  );
};

export default Result;
