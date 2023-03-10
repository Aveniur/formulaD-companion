/** Libraries **/
import { useState } from 'react';
import { Backward, MessageProgramming, Broom } from 'iconsax-react';

/** Functional **/
import { useSelectFormulaStore } from '@store/useFormulaStore.selects';
import { roundNumber } from '@utils/functions';
import Modal from '@components/Modal/Modal';

const InfoActions = () => {
  const { prevResults, setPrevResults, setResult } = useSelectFormulaStore();
  const [showCredits, setShowCredits] = useState(false);
  const average =
    prevResults.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / prevResults.length || 0;

  const iconButtonClassName = `info-actions__icon p-3 rounded-[50%] 
    md:hover:bg-slate-200 active:bg-slate-300
    transition-colors duration-[300ms] ease-in-out`;

  const handleReroll = () => {
    setResult(prevResults[prevResults.length - 2] || null);
    setPrevResults(prevResults.splice(0, prevResults.length - 1));
  };

  const handleCredits = () => {
    setShowCredits(true);
  };

  const handleClean = () => {
    setResult(null);
    setPrevResults([]);
  };

  return (
    <div
      className={`info-actions absolute w-full h-full p-6
    flex flex-col justify-between items-center 
    prose-p:text-sm prose-p:m-0`}
    >
      <p className="info-actions__average text-gray-600">
        avg. {roundNumber(average, 0)} slabs/turn
      </p>
      <div className="info-actions__icons-wrapper w-full flex justify-between">
        <button
          className={`info-actions__icon--reroll ${iconButtonClassName}`}
          onClick={handleReroll}
        >
          <Backward variant="TwoTone" />
        </button>
        <button
          className={`info-actions__icon--credits ${iconButtonClassName}`}
          onClick={handleCredits}
        >
          <MessageProgramming variant="TwoTone" />
        </button>
        <button
          className={`info-actions__icon--clean ${iconButtonClassName}`}
          onClick={handleClean}
        >
          <Broom variant="TwoTone" />
        </button>
      </div>
      {showCredits && (
        <Modal onOverlayClick={() => setShowCredits(false)}>
          <div className="modal__content box-border container p-6 flex bg-white justify-center w-fit max-w-full overflow-hidden rounded-xl">
            <article className="prose prose-a:text-blue-800 max-w-full overflow-hidden text-ellipsis">
              <h4 className="mt-0 max-w-full text-center mb-4">
                Formula D companion is a project developed by <br />
                <span>
                  (
                  <a href="https://github.com/jech33" target="_blank">
                    @jech33
                  </a>
                  ) Javier Echavez Chardaux
                </span>
                <br />
                <span>
                  (
                  <a href="https://github.com/aaurzola" target="_blank">
                    @aaurzola
                  </a>
                  ) Alejandro Urzola
                </span>
                <br />
              </h4>
              <p>
                This project was inspired by{' '}
                <span>
                  <a
                    href="https://arnosaine.github.io/noppa-d/"
                    target="_blank"
                  >
                    Arno Saine&apos;s
                  </a>
                </span>{' '}
                Dice roller. <br />
                Github:{' '}
                <span className="block text-ellipsis whitespace-nowrap max-w-full overflow-hidden">
                  <a href="https://github.com/ArnoSaine/" target="_blank">
                    https://github.com/ArnoSaine
                  </a>
                </span>
                Repo:{' '}
                <span className="block text-ellipsis whitespace-nowrap max-w-full overflow-hidden">
                  <a
                    href="https://github.com/ArnoSaine/noppa-d"
                    target="_blank"
                  >
                    https://github.com/ArnoSaine/noppa-d
                  </a>
                </span>
              </p>
            </article>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default InfoActions;
