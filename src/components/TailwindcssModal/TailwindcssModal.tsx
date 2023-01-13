import React from 'react';
import close from '../../assets/close.png';
import './main.css';

type Props = {
  children?: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  closeButton?: boolean;
  closeOnBackdropClick?: boolean;
  backdropStyles?: string;
  bluriness?: number;
};

export const TailwindcssModal: React.FC<Props> = ({
  children,
  className,
  isOpen,
  onClose,
  closeButton = false,
  closeOnBackdropClick = false,
}) => {
  return (
    <div
      aria-label="modal"
      className="absolute top-2/4 left-2/4 max-h-screen max-w-screen"
    >
      <div
        aria-label="backdrop"
        className={`fixed blur-md backdrop-blur-xl inset-0 top-0 left-0 w-screen h-screen bg-gray-800 opacity-30 ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={closeOnBackdropClick ? onClose : undefined}
      ></div>
      <div
        aria-label="modal-box"
        className={`${className} transition w-10/12 md:w-9/12 lg:w-5/12 duration-300 ease-in-out relative -translate-x-2/4 -translate-y-2/4 p-8 bg-white rounded-md  ${
          isOpen ? 'block' : 'hidden'
        } `}
      >
        {closeButton && (
          <div
            aria-label="close"
            onClick={onClose}
            className="absolute cursor-pointer top-2 right-2 bg-gray-200 p-2 rounded-md w-7 h-7"
          >
            <img className="h-full w-full object-cover" src={close} alt="X" />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};