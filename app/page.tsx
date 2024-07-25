import Image from "next/image";
import {
  garamond,
  inter,
  poppins,
  serifDisplay,
  title,
  vt323,
} from "./fonts/fonts";
import Link from "next/link";
import { fetchNavbarlinks, fetchAbout } from "./lib/fetchData";
import { IconCarousel } from "./ui/iconCarousel";
import { HoverGradient, HoverGradient2 } from "./components/hoverGradient";

const Home: React.FC = async () => {
  const navlinks = await fetchNavbarlinks();
  const aboutDetails = await fetchAbout();
  return (
    <main className="flex min-h-screen w-full md:flex-row flex-col md:justify-between bg-light transition-all duration-500">
      {/* Left column */}
      {/* Title card with name */}
      <div className="md:w-1/2 w-full md:h-screen transition-all duration-500">
        <div className="w-full md:h-1/3 h-1/6 pl-2 pt-2 md:pr-1 pr-2 pb-1 transition-all duration-500">
          <div
            className={`w-full h-full border border-dark ${inter.className} font-extrabold flex`}
          >
            <div className="md:w-0 md:border-r-0 border-r border-dark w-11 transition-all duration-500" />
            <div className="flex flex-col w-full h-full justify-end items-start md:px-4 px-1 transition-all duration-500">
              <h1 className="md:text-lg sm:text-sm text-xs transition-all duration-500">
                Hello, my name is
              </h1>
              <h1 className="lg:text-8xl md:text-6xl sm:text-5xl text-4xl transition-all duration-500">
                Jacob
              </h1>
              <h1 className="lg:text-8xl md:text-6xl sm:text-5xl text-4xl transition-all duration-500">
                Smith.
              </h1>
            </div>
          </div>
        </div>
        {/* About section */}
        <div
          className={`w-full md:h-2/3 h-1/3 overflow-clip pl-2 pb-2 md:pr-1 pr-2 pt-1 ${inter.className}`}
        >
          <div className="w-full h-full border border-dark relative justify-between flex flex-col">
            <div className="absolute w-full">
              <div className="w-full md:h-20 h-12 bg-dark text-center flex items-center justify-center overflow-clip group">
                <h1 className="md:text-4xl text-2xl font-bold italic text-light absolute z-20">
                  About
                </h1>
              </div>
            </div>
            <div className="h-1/2 justify-between flex flex-col">
              <p className="font-medium md:text-lg text-sm px-5 my-3 text-balance md:pt-20 pt-12 transition-all">
                {aboutDetails.content}
              </p>
              <div>
                <h2 className="md:text-4xl text-2xl font-bold pb-4 text-center transition-all">
                  Skills
                </h2>
                <div className="md:h-20 h-14 w-full border-t md:border-b border-dark md:pt-2 pt-2">
                  <IconCarousel />
                </div>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </div>

      {/* Right column */}

      <div className="md:w-1/2 w-full md:h-screen h-96">
        <div className="w-full md:h-2/3 h-full md:pl-1 pl-2 pb-1 pr-2 md:pt-2">
          <div className="w-full h-full border border-dark relative justify-between flex flex-col">
            <div className="absolute w-full h-full">
              <div className="w-full md:h-20 h-12 bg-dark text-center flex items-center justify-center overflow-clip group absolute">
                <h1 className="md:text-4xl text-2xl transition-all font-bold italic text-light absolute z-20">
                  Navigation
                </h1>
              </div>
              <div className="h-full w-full flex flex-col my-auto justify-center items-center md:pt-20 pt-12">
                {navlinks.map((link, index) => (
                  <Link
                    href={link.href}
                    key={index}
                    className={`w-full h-1/6 bg-light text-center flex items-center justify-center overflow-clip group border-t border-b border-dark my-2`}
                  >
                    <h1
                      className={`${inter.className} font-bold italic md:text-4xl text-2xl absolute z-20`}
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
        <div className="w-full md:h-1/3 h-56 md:pl-1 pl-2 pb-2 pr-2 pt-1">
          <div
            className={`w-full h-full border border-dark ${inter.className} flex flex-col`}
          >
            <div className="h-1/2 flex items-center justify-center">
              <h1 className="md:text-5xl text-3xl font-bold pb-8">Contact.</h1>
            </div>
            <a
              href="mailto:jwj.smith98@gmail.com"
              className="overflow-clip flex text-center items-center md:h-16 h-12 justify-center border-t border-b border-dark group relative md:hover:bg-accent transition-all duration-300"
            >
              <h1
                className={`md:text-4xl text-2xl ${title.className} bg-clip md:group-hover:scale-[103%] md:group-hover:text-light transition-all duration-300 absolute z-20 w-full overflow-clip`}
              >
                jwj.smith98@gmail.com
              </h1>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
