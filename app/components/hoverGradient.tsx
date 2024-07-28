"use client";
import { useEffect, useState } from "react";

const background = "dark";

export function HoverGradient() {
  return (
    <div className="w-full flex flex-col relative h-full group-hover:opacity-100 opacity-0 transition-all duration-200 ">
      <div className="h-full relative">
        <div
          className={`h-0 my-auto mx-auto bg-redpastel w-full group-hover:h-full transition-all duration-500 ease-out absolute bottom-0`}
        />
        <div
          className={`h-0 my-auto mx-auto bg-yellowpastel w-full group-hover:h-[98%] transition-all duration-500 ease-out delay-[50ms] bottom-0 absolute`}
        />
        <div
          className={`h-0 my-auto mx-auto bg-greenpastel w-full group-hover:h-[96%] transition-all duration-500 ease-out delay-100 bottom-0 absolute`}
        />
        <div
          className={`h-0 my-auto mx-auto bg-gradient-to-t from-${background} to-bluepastel w-full group-hover:h-[94%] transition-all duration-500 ease-out delay-150 bottom-0 absolute`}
        />
      </div>
    </div>
  );
}

export function HoverGradient2() {
  return (
    <div className="w-full flex rotate-45 h-screen group-hover:opacity-100 opacity-0 transition-all duration-300">
      <div
        className={`w-0 my-auto mx-auto bg-redpastel h-full group-hover:w-full transition-all  duration-700 ease-in-out left-0 absolute`}
      />
      <div
        className={`w-0 my-auto mx-auto bg-yellowpastel h-full group-hover:w-full transition-all  duration-700 ease-in-out delay-[50ms] left-0 absolute`}
      />
      <div
        className={`w-0 my-auto mx-auto bg-greenpastel h-full group-hover:w-full transition-all  duration-700 ease-in-out delay-100 left-0 absolute`}
      />
      <div
        className={`w-0 my-auto mx-auto bg-bluepastel h-full group-hover:w-full transition-all  duration-700 ease-in-out delay-150 left-0 absolute`}
      />
      <div
        className={`w-0 my-auto mx-auto bg-gradient-to-r from-${background} to-bluepastel h-full group-hover:w-full transition-all  duration-700 ease-in-out delay-200 left-0 absolute `}
      />
    </div>
  );
}

export function HoverGradient3() {
  const [animateContent, setAnimateContent] = useState(false);
  const [hideContent, setHideContent] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    setAnimateContent(true);

    const timeout = setTimeout(() => {
      setInitialLoad(false);
      setHideContent(true);
    }, 300); // Adjust the timeout as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`z-0 w-full flex flex-row relative h-40 transition-all duration-500`}
    >
      <div className="w-full relative items-end justify-end">
        <div
          className={`${
            animateContent ? "w-full" : "w-0"
          } my-auto mx-auto bg-redpastel h-40 transition-all duration-500 ease-in-out absolute`}
          style={{
            transitionDelay: initialLoad ? "0ms" : "150ms",
          }}
        />
        <div
          className={`${
            animateContent ? "w-[98%]" : "w-0"
          } my-auto mx-auto bg-yellowpastel h-40 transition-all duration-500 ease-in-out absolute`}
          style={{
            transitionDelay: initialLoad ? "50ms" : "200ms",
          }}
        />
        <div
          className={`${
            animateContent ? "w-[96%]" : "w-0"
          } my-auto mx-auto bg-greenpastel h-40 transition-all duration-500 ease-in-out absolute`}
          style={{
            transitionDelay: initialLoad ? "100ms" : "250ms",
          }}
        />
        <div
          className={`${
            animateContent ? "w-[94%]" : "w-0"
          } my-auto mx-auto bg-gradient-to-r from-dark to-bluepastel h-40 transition-all duration-500 ease-in-out absolute r-12`}
          style={{
            transitionDelay: initialLoad ? "150ms" : "300ms",
          }}
        />
      </div>
    </div>
  );
}
