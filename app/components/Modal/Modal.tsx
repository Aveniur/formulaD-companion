/** Libraries **/
import { HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';

const Modal = (
  props: HTMLAttributes<HTMLDivElement> & { onOverlayClick?: () => void },
) => {
  const { children, onOverlayClick } = props;
  return createPortal(
    <div
      className={`modal p-6 box-border top-0 fixed z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center`}
      onClick={onOverlayClick}
    >
      <div
        className={`modal modal__body max-h-full max-w-full`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
