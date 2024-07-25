export function HoverGradient() {
  return (
    <div className="w-full flex flex-row relative h-40 group-hover:opacity-100 opacity-0 transition-all duration-500 ">
      <div className="w-full relative">
        <div
          className={`w-0 my-auto mx-auto bg-redpastel h-40 group-hover:w-full transition-all duration-500 ease-in-out absolute right-0`}
        />
        <div
          className={`w-0 my-auto mx-auto bg-yellowpastel h-40 group-hover:w-full transition-all duration-500 ease-in-out delay-[50ms] right-0 absolute`}
        />
        <div
          className={`w-0 my-auto mx-auto bg-greenpastel h-40 group-hover:w-full transition-all duration-500 ease-in-out delay-100 right-0 absolute`}
        />
        <div
          className={`w-0 my-auto mx-auto bg-gradient-to-l from-dark to-bluepastel h-40 group-hover:w-full transition-all duration-500 ease-in-out delay-150 right-0 absolute`}
        />
      </div>
      <div className="w-full relative items-end justify-end">
        <div
          className={`w-0 my-auto mx-auto bg-redpastel h-40 group-hover:w-full transition-all duration-500 ease-in-out left-0 absolute`}
        />
        <div
          className={`w-0 my-auto mx-auto bg-yellowpastel h-40 group-hover:w-full transition-all duration-500 ease-in-out delay-[50ms] left-0 absolute`}
        />
        <div
          className={`w-0 my-auto mx-auto bg-greenpastel h-40 group-hover:w-full transition-all duration-500 ease-in-out delay-100 left-0 absolute`}
        />
        <div
          className={`w-0 my-auto mx-auto bg-gradient-to-r from-dark to-bluepastel h-40 group-hover:w-full transition-all duration-500 ease-in-out delay-150 left-0 absolute`}
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
        className={`w-0 my-auto mx-auto bg-gradient-to-r from-light to-bluepastel h-full group-hover:w-full transition-all  duration-700 ease-in-out delay-200 left-0 absolute `}
      />
    </div>
  );
}
