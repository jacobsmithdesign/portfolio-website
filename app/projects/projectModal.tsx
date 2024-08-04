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
    console.log(children.props.projectDetails.title);
    setTimeout(onClose, 600);
  };

  return (
    <div
      className={`fixed inset-0 md:ml-20 ml-14 my-auto z-50 flex justify-center ${!closeAnimation ? "h-0 duration-300" : "h-full duration-700"} transition-all ease-in-out opacity mr-2 border-dark delay-300`}
    >
      <div
        className={`relative ${!closeAnimation ? "w-0" : "w-full"} bg-light/80 dark:bg-dark/80 backdrop-blur my-2 border border-dark dark:border-light transition-all duration-300 min-h-0 ease-out overflow-y-scroll hide-scrollbar`}
      >
        <div className="fixed w-full md:h-24 h-12 bg-light dark:bg-dark border-b border-dark dark:border-light transition-all duration-300 z-10">
          <button
            className={`fixed md:top-8 top-4 md:right-8 right-4 md:w-8 md:h-8 h-4 w-4 text-dark dark:text-light hover:scale-90 transition-all duration-100 ${!closeAnimation ? "opacity-0" : "opacity-100"} `}
            onClick={handleClose}
          >
            <Close />
          </button>
          <h1
            className={`md:text-4xl text-sm font-bold md:my-7 my-3 text-left md:mr-0 mr-8 md:ml-8 ml-2 text-dark dark:text-light transition-all duration-[75ms] ${!closeAnimation ? "opacity-0" : "opacity-100"}`}
          >
            {children.props.projectDetails.title}
          </h1>
        </div>
        <div
          className={`transition-all duration-100 md:pt-28 pt-14 px-2 ${!closeAnimation ? "opacity-0" : "opacity-100"} h-full overflow-y-scroll hide-scrollbar z-0 w-full xl:max-w-6xl flex mx-auto`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
