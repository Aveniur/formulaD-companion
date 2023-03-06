import { ResultProps } from './Result.types';

const Result = (props: ResultProps) => {
  const { isRolling, result } = props;
  return <div>{isRolling ? <div>Rolling...</div> : <div>{result}</div>}</div>;
};

export default Result;
