"use client";
import { inter } from "../fonts/fonts";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Arrow from "@/public/diagonal-arrow.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { animate } from "framer-motion";
import { StructuredText } from "react-datocms";
import customRenderers from "./customRenderers";
import Modal from "./musicModal";
import { HoverGradient3 } from "../components/hoverGradient";
import GridBackground from "../ui/gridBackground";
import Soundcloud from "@/public/Soundcloud.svg";
import Spotify from "@/public/Spotify.svg";
import Tidal from "@/public/Tidal.svg";
import Link from "next/link";

function MusicProject({ musicProject }) {
  const [animateContent, setAnimateContent] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [showTracks, setShowTracks] = useState(
    new Array(musicProject.length).fill(false)
  );
  const [showLinks, setShowLinks] = useState(
    new Array(musicProject.length).fill(false)
  );

  useEffect(() => {
    setAnimateContent(true);

    const timeout = setTimeout(
      () => {
        setInitialLoad(false);
      },
      musicProject.length * 300 + 1000
    ); // Adjust the timeout as needed

    return () => clearTimeout(timeout);
  }, [musicProject]);

  const toggleTracklist = (index) => {
    setShowTracks((prev) => {
      const updatedTracks = [...prev];
      updatedTracks[index] = !updatedTracks[index];
      return updatedTracks;
    });
  };
  const toggleLinklist = (index) => {
    setShowLinks((prev) => {
      const updatedTracks = [...prev];
      updatedTracks[index] = !updatedTracks[index];
      return updatedTracks;
    });
  };

  return (
    <div className="w-full ">
      <div
        className={` ${animateContent ? "opacity-100" : "opacity-0"} transition-all duration-700 delay-500`}
      >
        {musicProject.map((project, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-3 grid-cols-2 ${animateContent ? "opacity-100" : "opacity-0"} transition-all duration-700`}
            style={{
              transitionDelay: initialLoad
                ? `${150 * (index + 1) + 400}ms`
                : "0ms",
            }}
          >
            <div
              className={`group md:h-96 h-56 border-b border-r bg-secondary border-dark dark:border-light flex relative group overflow-clip items-end justify-center`}
            >
              <div
                className={`w-full h-full z-30 ${animateContent ? "backdrop-blur-none" : "backdrop-blur-xl"} transition-all duration-700`}
                style={{
                  transitionDelay: initialLoad
                    ? `${150 * (index + 1) + 400}ms`
                    : "0ms",
                }}
              />
              <Image
                src={project.image.url}
                alt="background image for computer science project"
                width={400}
                height={400}
                className="object-cover overflow-clip w-full h-full absolute opacity-60 transition-all duration-700 ease-in-out"
              />
            </div>
            <div className="md:col-span-2 md:h-96 h-56 flex flex-col relative">
              <h1
                className={`md:text-4xl text-md font-bold ${animateContent ? "md:pl-4 pl-2" : "pl-0"} md:pt-4 pt-1 transition-all duration-500`}
                style={{
                  transitionDelay: initialLoad
                    ? `${150 * (index + 1) + 400}ms`
                    : "0ms",
                }}
              >
                {project.title}
              </h1>
              <div className="max-w-[36rem]">
                <div
                  className={`flex flex-col w-full h-full z-40 absolute items-center justify-center`}
                >
                  {project.tidal && (
                    <Link href={project.tidal} data-flare="Listen on Tidal">
                      <Tidal className="md:w-20 md:h-20 w-12 h-12 bg-light mb-4 p-2 border border-dark" />
                    </Link>
                  )}
                  {project.spotify && (
                    <Link href={project.spotify} data-flare="Listen on Spotify">
                      <Spotify className="md:w-20 md:h-20 w-12 h-12 bg-light mb-4 p-2 text-dark border border-dark" />
                    </Link>
                  )}
                  {project.soundcloud && (
                    <Link
                      href={project.soundcloud}
                      data-flare="Listen on Soundcloud"
                    >
                      <Soundcloud className="md:w-20 md:h-20 w-12 h-12 bg-light mb-4 p-2 text-dark border border-dark" />
                    </Link>
                  )}
                </div>
              </div>
              {/* Animated Border */}
              <div
                className={`border-b border-dark dark:border-light ${animateContent ? "w-full" : "w-0"} transition-all duration-700 bottom-0 absolute`}
                style={{
                  transitionDelay: initialLoad
                    ? `${150 * (index + 1) + 600}ms`
                    : "0ms",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  //   Old return
  //   return (
  //     <div className="w-full ">
  //     <div
  //       className={` ${animateContent ? "opacity-100" : "opacity-0"} transition-all duration-700 delay-500`}
  //     >
  //       {musicProject.map((project, index) => (
  //         <div
  //           key={index}
  //           className={`grid md:grid-cols-3 grid-cols-2 ${animateContent ? "opacity-100" : "opacity-0"} transition-all duration-700`}
  //           style={{
  //             transitionDelay: initialLoad
  //               ? `${150 * (index + 1) + 400}ms`
  //               : "0ms",
  //           }}
  //         >
  //           <div
  //             className={`group md:h-96 h-56 border-b border-r bg-secondary border-dark dark:border-light flex relative group overflow-clip items-end justify-center`}
  //           >
  //             {showLinks[index] && (
  //               <div
  //                 className={`flex flex-col w-full h-full z-40 absolute items-center justify-center`}
  //               >
  //                 {project.tidal && (
  //                   <Link href={project.tidal}>
  //                     <Tidal className="md:w-20 md:h-20 w-12 h-12 bg-light mb-4 p-2 border border-dark" />
  //                   </Link>
  //                 )}
  //                 {project.spotify && (
  //                   <Link href={project.spotify}>
  //                     <Spotify className="md:w-20 md:h-20 w-12 h-12 bg-light mb-4 p-2 text-dark border border-dark" />
  //                   </Link>
  //                 )}
  //                 {project.soundcloud && (
  //                   <Link href={project.soundcloud}>
  //                     <Soundcloud className="md:w-20 md:h-20 w-12 h-12 bg-light mb-4 p-2 text-dark border border-dark" />
  //                   </Link>
  //                 )}
  //               </div>
  //             )}
  //             <div
  //               onClick={() => toggleLinklist(index)}
  //               className={`w-full h-full z-30 ${animateContent ? "backdrop-blur-none" : "backdrop-blur-xl"} transition-all duration-700 ${showLinks[index] ? "backdrop-blur-sm" : "backdrop-blur-none"} cursor-pointer`}
  //               style={{
  //                 transitionDelay: initialLoad
  //                   ? `${150 * (index + 1) + 400}ms`
  //                   : "0ms",
  //               }}
  //             />

  //             <button
  //               onClick={() => toggleLinklist(index)}
  //               className={`flex flex-col z-40 absolute md:text-lg text-sm bg-light text-dark p-2 border border-dark md:group-hover:opacity-100 opacity-0 transition-all md:duration-700 ease-in-out mb-2 ${showLinks[index] ? "opacity-100" : ""}`}
  //             >
  //               {showLinks[index] ? "Hide" : "Show"} Links
  //             </button>
  //             <Image
  //               src={project.image.url}
  //               alt="background image for computer science project"
  //               width={400}
  //               height={400}
  //               className="object-cover overflow-clip w-full h-full absolute opacity-60 transition-all duration-700 ease-in-out"
  //             />
  //           </div>
  //           <div className="md:col-span-2 md:h-96 h-56 flex flex-col relative">
  //             <h1
  //               className={`md:text-4xl text-md font-bold ${animateContent ? "md:pl-4 pl-2" : "pl-0"} md:pt-4 pt-1 transition-all duration-500`}
  //               style={{
  //                 transitionDelay: initialLoad
  //                   ? `${150 * (index + 1) + 400}ms`
  //                   : "0ms",
  //               }}
  //             >
  //               {project.title}
  //             </h1>
  //             <div className="max-w-[36rem] mr-36 md:block hidden">
  //               <button
  //                 onClick={() => toggleTracklist(index)}
  //                 className={`md:text-lg text-sm ${animateContent ? "md:pl-4 pl-2" : "pl-0"} md:pt-4 pt-1 text-darkSecondary dark:text-secondary transition-all duration-500 hover:opacity-50`}
  //               >
  //                 {showTracks[index] ? "Hide" : "Show"} Tracklist
  //               </button>
  //               {showTracks[index] && (
  //                 <StructuredText
  //                   data={project.content.value.document}
  //                   customNodeRules={customRenderers}
  //                 />
  //               )}
  //             </div>
  //             {/* Animated Border */}
  //             <div
  //               className={`border-b border-dark dark:border-light ${animateContent ? "w-full" : "w-0"} transition-all duration-700 bottom-0 absolute`}
  //               style={{
  //                 transitionDelay: initialLoad
  //                   ? `${150 * (index + 1) + 600}ms`
  //                   : "0ms",
  //               }}
  //             />
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
}
function MusicComponent({ music, onMusicClick }) {
  const [animateContent, setAnimateContent] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    setAnimateContent(true);

    const timeout = setTimeout(
      () => {
        setInitialLoad(false);
      },
      music.length * 300 + 1000
    ); // Adjust the timeout as needed

    return () => clearTimeout(timeout);
  }, [music]);

  return (
    <div className="w-full text-dark dark:text-light">
      <div
        className={` ${animateContent ? "opacity-100" : "opacity-0"} transition-all duration-700 delay-500`}
      >
        <MusicProject musicProject={music} />
        {/* {music.map((music, index) => (
          <button
            key={index}
            className={`md:h-96 h-56 border-b transition-all duration-300 ${index % 2 == 0 ? "md:border-r-0 border-r" : ""} ${index != 0 ? "md:border-l" : ""} bg-secondary border-dark items-end flex relative group overflow-clip`}
            onClick={() => onMusicClick(music)}
          >
            <div
              className={`w-full h-full z-30 ${animateContent ? "backdrop-blur-none" : "backdrop-blur-xl"} transition-all duration-700`}
              style={{
                transitionDelay: initialLoad
                  ? `${150 * (index + 1) + 400}ms`
                  : "0ms",
              }}
            />
            <h2
              className={`${animateContent ? "md:pb-6 pb-4 opacity-100" : "pb-0 opacity-0"} transition-all duration-700 ease-in-out md:px-4 px-2 md:text-2xl text-md text-left text-balance font-bold absolute z-20 md:group-hover:text-light`}
              style={{
                transitionDelay: initialLoad
                  ? `${150 * (index + 1) + 400}ms`
                  : "0ms",
              }}
            >
              {music.title}
            </h2>

            <Arrow
              className={`md:h-16 h-10 text-dark md:group-hover:text-light top-0 right-0 absolute mt-2 mr-2 md:group-hover:mt-0 md:group-hover:mr-0 transition-all duration-300 ease-in-out z-20`}
            />
            <div className="md:group-hover:opacity-100 opacity-0 transition-all duration-300 bg-gradient-to-t from-dark to-transparent absolute w-full h-full" />
            <Image
              src={music.image.url}
              alt="background image for computer science music"
              width={400}
              height={400}
              className="object-cover overflow-clip w-full h-full absolute opacity-30 md:group-hover:opacity-60 transition-all duration-700 ease-in-out md:group-hover:scale-105"
            />
          </button>
        ))} */}
      </div>
    </div>
  );
}

function EnlargedMusic({ musicDetails }) {
  if (!musicDetails) return null;

  return (
    <div>
      <h2 className="md:text-4xl text-2xl font-bold mb-4 transition-all duration-500">
        {musicDetails.title}
      </h2>
      <Image
        src={musicDetails.image.url}
        alt={`Image for ${musicDetails.title}`}
        width={800}
        height={800}
        className="object-cover w-full h-96 mb-4"
      />
      <StructuredText
        data={musicDetails.content.value.document}
        customNodeRules={customRenderers}
      />
    </div>
  );
}
export function Music({ music }) {
  const [selectedMusic, setSelectedMusic] = useState(null);

  const handleMusicClick = (music) => {
    setSelectedMusic(music);
  };

  const handleClose = () => {
    setSelectedMusic(null);
  };

  return (
    <div className="py-2 pr-2 md:pl-20 pl-14 flex flex-col h-screen transition-all duration-500 bg-light dark:bg-dark">
      <div className="border border-dark dark:border-light h-full relative overflow-hidden">
        <div className="w-full text-center border-b border-dark dark:border-light md:h-24 h-12 group overflow-clip transition-all duration-500">
          <h1
            className={`${inter.className} pl-2 lg:text-8xl md:text-6xl text-5xl overflow-clip text-left font-bold text-tertiary text-light absolute z-10 transition-all duration-500`}
          >
            Music.
          </h1>
          <HoverGradient3 />
        </div>
        <div className="overflow-y-scroll h-full hide-scrollbar md:pb-24 pb-12 transition-all duration-500">
          <MusicComponent music={music} onMusicClick={handleMusicClick} />
          <Modal isOpen={selectedMusic !== null} onClose={handleClose}>
            <EnlargedMusic musicDetails={selectedMusic} />
          </Modal>
          <GridBackground />
        </div>
      </div>
    </div>
  );
}

export default Music;
