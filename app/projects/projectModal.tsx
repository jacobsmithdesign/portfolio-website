import React, { useState, useEffect } from "react";
import Close from "../../public/cross.svg";

function Modal({ children, isOpen, onClose }) {
  const [closeAnimation, setCloseAnimation] = useState(false);

  useEffect(() => {
    if (!isOpen) return; // Early return if the modal is not open
    setCloseAnimation(true); // Reset close animation state when the modal is opened
  }, [isOpen]);
  if (!isOpen) return null;
  const handleClose = () => {
    setCloseAnimation(false);
    setTimeout(onClose, 650);
  };

  return (
    <div
      className={`fixed inset-0 md:ml-20 ml-14 my-auto z-50 flex justify-center ${!closeAnimation ? "h-0" : "h-full"} transition-all opacity duration-700 mr-2 border-dark`}
    >
      <div
        className={`relative  w-full overflow-y-hidden bg-light/80 backdrop-blur my-2 border border-dark transition-all duration-300 min-h-0`}
      >
        <button
          className={`absolute md:top-8 top-4 md:right-8 right-4 md:w-8 md:h-8 h-4 w-4 text-dark hover:scale-90 transition-all duration-300 ${!closeAnimation ? "opacity-0" : "opacity-100"}  `}
          onClick={handleClose}
        >
          <Close />
        </button>
        <div
          className={`${!closeAnimation ? "opacity-0" : "opacity-100"} transition-all duration-500 p-8`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
