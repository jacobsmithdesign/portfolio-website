"use client";
import Image from "next/image";
import {
  garamond,
  inter,
  neonTube,
  poppins,
  serifDisplay,
  title,
  vt323,
} from "./fonts/fonts";
import Link from "next/link";
import { fetchNavbarlinks, fetchAbout } from "./lib/fetchData";
import { IconCarousel } from "./ui/iconCarousel";
import { HoverGradient, HoverGradient2 } from "./components/hoverGradient";
import Waves1 from "../public/waves1.svg";
import Waves2 from "../public/waves2.svg";
import Waves3 from "../public/waves3.svg";
import Waves4 from "../public/waves4.svg";
import Angle from "../public/angle.svg";
import { useContext, useEffect, useState } from "react";
import { animate } from "framer-motion";
import MyThemeContext from "./context/themeContext";
import GridBackground from "./ui/gridBackground";

function ColourfulWaves() {
  return (
    <div className="w-screen h-full absolute overflow-clip pt-36 z-0">
      <div className="wave-container wave-container-right slow-right items-end z-30 mt-8">
        <Waves1 />
        <Waves1 />
      </div>
      <div className="wave-container wave-container-left medium-left items-end z-20 mt-12">
        <Waves2 />
        <Waves2 />
      </div>
      <div className="wave-container wave-container-right fast-right items-end z-10 mt-8">
        <Waves3 />
        <Waves3 />
      </div>
      <div className="wave-container wave-container-left  items-end z-0 veryfast-left mt-12">
        <Waves4 />
        <Waves4 />
      </div>
    </div>
  );
}

const background = "light";
const foreground = "dark";
const backgroundDark = "light/60";
const foregroundDark = "dark/60";

export function HomePage({ navlinks, aboutDetails }) {
  const [animateSize, setAnimateSize] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [closeAnimation, setCloseAnimation] = useState(false);

  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }

  useEffect(() => {
    setAnimateSize(true);

    const timeout = setTimeout(() => {
      setShowContent(true);
      setInitialLoad(false);
    }, 500); // Adjust the timeout as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main
      className={`flex min-h-screen w-full md:flex-row flex-col md:justify-between bg-light dark:bg-dark transition-all duration-500 text-dark dark:text-light`}
    >
      {/* Left column */}
      {/* Title card with name */}
      <div
        className={`md:w-1/2 w-full md:h-screen transition-all duration-700`}
      >
        <div
          className={`${animateSize ? "w-full" : "w-0"} md:h-1/3 h-1/6 pl-2 pt-2 md:pr-1 pr-2 pb-1 transition-all duration-700 overflow-clip`}
        >
          <button
            data-flare="Light Mode/ Dark Mode"
            className={`${animateSize ? "md:h-full h-28" : "h-0"} transition-height duration-700 w-full border border-dark dark:border-light ${inter.className} font-extrabold relative flex overflow-clip group z-[55]`}
            onClick={() => {
              toggleThemeHandler();
            }}
          >
            <div
              className={`md:w-0 md:border-r-0 border-r border-dark dark:border-light w-11 transition-all duration-500 z-20 `}
            />
            <div
              className={`flex flex-col w-full h-full justify-end items-start md:px-4 px-1 transition-all duration-700 z-20 ${showContent ? "opacity-100" : "opacity-0"} delay-300`}
            >
              <h1
                className={` md:text-lg sm:text-sm text-xs transition-all duration-500 text-dark dark:text-light`}
              >
                Hello, my name is
              </h1>
              <h1
                className={`lg:text-8xl md:text-6xl sm:text-5xl text-4xl transition-all duration-500 text-dark dark:text-light `}
              >
                JACOB
              </h1>
              <h1
                className={`lg:text-8xl md:text-6xl sm:text-5xl text-4xl transition-all duration-500 text-dark dark:text-light`}
              >
                SMITH.
              </h1>
            </div>
            {/* Backdrop blur layer */}
            <div
              className={`w-full h-full absolute backdrop-blur-3xl z-10 opacity-100 md:group-hover:bg-dark/20 dark:md:group-hover:bg-light/10 transition-all duration-100`}
            />
            {/* colourful waves */}
            <div className="w-full absolute opacity-50 h-full">
              <ColourfulWaves />
            </div>
          </button>
        </div>
        {/* About section */}
        <div
          className={`${animateSize ? "w-full opacity-100" : "w-0 max-h-0 opacity-0"} transition-all duration-700 md:h-2/3 overflow-clip pl-2 pb-2 md:pr-1 pr-2 pt-1 ${inter.className} delay-300 md:delay-500 `}
        >
          {/* Doesnt animate height properly unless a specific height is set just for mobile. */}
          <div
            className={` ${animateSize ? "md:h-full h-[35rem]" : "h-0"} md:delay-[1200ms] delay-[1200ms] border border-dark dark:border-light overflow-clip transition-height duration-700`}
          >
            <div
              className={`w-full ${showContent ? "opacity-100" : "opacity-0"} transition-all duration-700 delay-1000 relative justify-between flex flex-col oveflow-clip h-full`}
            >
              <div className="flex w-full relative">
                <div
                  className={`w-2/3 md:h-20 h-12 text-center flex items-center overflow-clip group absolute bg-dark dark:bg-light rounded-br-3xl z-40 duration-500`}
                >
                  <h1
                    className={`md:text-5xl text-3xl transition-all font-bold md:ml-4 ml-2 text-light dark:text-dark absolute z-20 duration-500`}
                  >
                    About.
                  </h1>
                </div>
                <div className="absolute w-2/3 md:h-20 rounded-br-2xl bg-redpastel z-20 ml-2" />
                <div className="absolute w-2/3 md:h-20 rounded-br-xl bg-yellowpastel z-10 ml-4" />
                <div className="absolute w-2/3 md:h-20 rounded-br-md bg-bluepastel ml-6" />
              </div>
              <div className="h-full flex flex-col md:mt-20 mt-12 justify-between">
                <div className="h-full justify-center items-center flex">
                  <p className=" w-fullfont-medium md:text-lg text-sm px-5 my-auto text-balance transition-all text-dark dark:text-light">
                    {aboutDetails.content}
                  </p>
                </div>
                <div className="h-full">
                  <h2
                    className="md:text-4xl text-2xl font-bold pb-3 text-left ml-5
                 transition-all text-dark dark:text-light"
                  >
                    Education
                  </h2>
                  <div
                    className={`w-full border-t border-dark dark:border-light md:pt-2 pt-2 transition-all duration-500`}
                  ></div>
                  <h3
                    className="md:text-2xl text-xl font-bold pb-4 text-left mx-5
                 transition-all text-dark dark:text-light"
                  >
                    Queensland University of Technology
                  </h3>
                  <p
                    className="md:text-xl text-md pb-4 text-left ml-5
                 transition-all text-dark dark:text-light mr-8"
                  >
                    Bachelor of Information Technology, Computer Science with
                    Distinction
                  </p>
                  <p
                    className="md:text-md text-sm pb-4 text-left ml-5
                 transition-all text-dark dark:text-secondary opacity-70"
                  >
                    2021 - 2024
                  </p>
                </div>
                <div className="">
                  <h2 className="md:text-4xl text-2xl font-bold pb-3 text-left mx-5 transition-all text-dark dark:text-light">
                    Skills
                  </h2>
                  <div
                    className={`md:h-20 h-14 w-full border-t border-dark dark:border-light md:pt-2 pt-2 transition-all duration-500`}
                  >
                    <IconCarousel />
                  </div>
                </div>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      {/* Right column */}

      <div className="md:w-1/2 w-full md:h-screen">
        <div
          className={`${animateSize ? "w-full opacity-100" : "w-0 opacity-0"} transition-all duration-700 md:h-2/3 h-full md:pl-1 pl-2 pb-1 pr-2 md:pt-2 md:delay-300 delay-500`}
        >
          <div
            className={`${animateSize ? "md:h-full h-96" : "h-0"} transition-height duration-700 delay-[1000ms] border border-dark dark:border-light relative justify-between flex flex-col overflow-hidden`}
          >
            <div
              className={`${showContent ? "opacity-100" : "opacity-0"} transition-all duration-700 delay-700  h-full absolute w-full overflow-y-clip`}
            >
              <div className="flex w-full relative">
                <div
                  className={`w-2/3 md:h-20 h-12 text-center flex items-center overflow-clip group absolute mr-4 bg-dark dark:bg-light rounded-br-3xl z-40 duration-500`}
                >
                  <h1
                    className={`md:text-5xl text-3xl transition-all font-bold md:ml-4 ml-2 text-light dark:text-dark absolute z-20 duration-500`}
                  >
                    Navigation.
                  </h1>
                </div>
                <div className="absolute w-2/3 md:h-20 rounded-br-2xl bg-redpastel z-20 ml-2" />
                <div className="absolute w-2/3 md:h-20 rounded-br-xl bg-yellowpastel z-10 ml-4" />
                <div className="absolute w-2/3 md:h-20 rounded-br-md bg-bluepastel z-[6] ml-6" />
              </div>
              <div className="h-full w-full flex flex-col my-auto justify-center items-center relative md:pt-20 pt-12 ">
                {navlinks.map((link, index) => (
                  <Link
                    href={link.href}
                    key={index}
                    data-flare=" "
                    className={`w-full h-1/6  text-center flex items-center justify-center overflow-clip group border-t border-b border-dark dark:border-light my-2 duration-500 z-20 bg-light dark:bg-dark`}
                  >
                    <h1
                      className={`${inter.className} md:group-hover:text-light dark:text-light text-dark transition-all duration-500 font-bold italic md:text-4xl text-2xl w-full pl-4 text-left absolute z-20`}
                    >
                      {link.title}
                    </h1>
                    <HoverGradient2 />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${animateSize ? "w-full opacity-100" : "w-0 opacity-0"} transition-all duration-700 md:h-1/3 h-56 md:pl-1 pl-2 pb-2 pr-2 pt-1 md:delay-700 delay-700`}
        >
          <div
            className={`w-full ${animateSize ? "h-full " : "h-0"} transition-height duration-700 md:delay-[1500ms] delay-[1300ms] border border-dark dark:border-light ${inter.className} flex flex-col overflow-hidden relative`}
          >
            <div className="flex w-full md:h-20 h-12">
              <div
                className={`w-2/3 md:h-20 h-12 text-center flex items-center overflow-clip group absolute mr-4 bg-dark dark:bg-light rounded-br-3xl z-40 duration-500`}
              >
                <h1
                  className={`md:text-5xl text-3xl transition-all font-bold md:ml-4 ml-2 text-light dark:text-dark absolute duration-500`}
                >
                  Contact.
                </h1>
              </div>
              <div className="absolute w-2/3 md:h-20 rounded-br-2xl bg-redpastel z-20 ml-2" />
              <div className="absolute w-2/3 md:h-20 rounded-br-xl bg-yellowpastel z-10 ml-4" />
              <div className="absolute w-2/3 md:h-20 rounded-br-md bg-bluepastel ml-6" />
            </div>
            <Link
              href="/contact"
              data-flare=" "
              className={`overflow-clip flex text-center items-center md:h-16 h-12 justify-center border-t border-b border-dark dark:border-light group relative bg-light dark:bg-dark md:hover:bg-accent transition-all duration-500 my-auto z-20`}
            >
              <h1
                className={`md:text-4xl text-2xl ${title.className} bg-clip md:group-hover:scale-[103%] md:group-hover:text-light transition-all duration-300 absolute z-20 w-full overflow-clip text-dark dark:text-light`}
              >
                Get in touch
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
