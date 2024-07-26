"use client";
import { inter } from "../fonts/fonts";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Arrow from "../../public/diagonal-arrow.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { animate } from "framer-motion";
import { StructuredText } from "react-datocms";
import customRenderers from "./customRenderers";
import Modal from "./galleryModal";
import { HoverGradient3 } from "../components/hoverGradient";

function GalleryComponent({ gallery, onGalleryClick }) {
  const [animateContent, setAnimateContent] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    setAnimateContent(true);

    const timeout = setTimeout(
      () => {
        setInitialLoad(false);
      },
      gallery.length * 300 + 1000
    ); // Adjust the timeout as needed

    return () => clearTimeout(timeout);
  }, [gallery]);

  return (
    <div className="w-full">
      <div
        className={`grid md:grid-cols-3 grid-cols-2 ${animateContent ? "opacity-100" : "opacity-0"} transition-all duration-700 delay-500`}
      >
        {gallery.map((gallery, index) => (
          <button
            key={index}
            className={`md:h-96 h-56 border-b transition-all duration-300 ${index % 2 == 0 ? "md:border-r-0 border-r" : ""} ${index != 0 ? "md:border-l" : ""} bg-secondary border-dark items-end flex relative group overflow-clip`}
            onClick={() => onGalleryClick(gallery)}
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
              className={`${animateContent ? "md:pb-6 pb-4 opacity-100" : "pb-0 opacity-0"} transition-all duration-700 ease-in-out md:px-4 px-2 md:text-2xl text-md text-left text-balance font-bold absolute z-20 text-light`}
              style={{
                transitionDelay: initialLoad
                  ? `${150 * (index + 1) + 400}ms`
                  : "0ms",
              }}
            >
              {gallery.title}
            </h2>

            <div className="opacity-100 transition-all duration-300 bg-gradient-to-t from-dark to-transparent absolute w-full h-full" />
            <Image
              src={gallery.image.url}
              alt="background image for computer science gallery"
              width={400}
              height={400}
              className="object-cover overflow-clip w-full h-full absolute opacity-70 md:group-hover:opacity-100 transition-all duration-700 ease-in-out md:group-hover:scale-105"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
function EnlargedGallery({ galleryDetails }) {
  if (!galleryDetails) return null;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h2 className="md:text-4xl text-2xl font-bold md:my-8 my-2 text-center">
        {galleryDetails.title}
      </h2>
      <div className="w-full h-full flex justify-center items-center overflow-hidden ">
        <Image
          src={galleryDetails.image.url}
          alt={`Image for ${galleryDetails.title}`}
          width={800}
          height={800}
          unoptimized
          className="object-contain w-full max-h-full "
          style={{ maxHeight: "calc(100vh - 128px)", maxWidth: "100%" }} // Ensure it fits within the viewport height and width
        />
      </div>
    </div>
  );
}
export function GalleryWrapper({ gallery }) {
  const [selectedGallery, setSelectedGallery] = useState(null);

  const handleGalleryClick = (gallery) => {
    setSelectedGallery(gallery);
  };

  const handleClose = () => {
    setSelectedGallery(null);
  };

  return (
    <div className="py-2 pr-2 md:pl-20 pl-14 flex flex-col h-screen transition-all duration-500">
      <div className="border border-dark h-full relative overflow-hidden">
        <div className="w-full text-center border-b border-dark md:h-24 h-12 group overflow-clip transition-all duration-300">
          <h1
            className={`${inter.className} pl-2 lg:text-8xl md:text-6xl text-5xl overflow-clip text-left font-bold text-tertiary text-light absolute z-10 transition-all duration-500`}
          >
            Gallery.
          </h1>
          <HoverGradient3 />
        </div>
        <div className="overflow-y-scroll h-full hide-scrollbar md:pb-24 pb-12 transition-all duration-500">
          <GalleryComponent
            gallery={gallery}
            onGalleryClick={handleGalleryClick}
          />
          <Modal isOpen={selectedGallery !== null} onClose={handleClose}>
            <EnlargedGallery galleryDetails={selectedGallery} />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default GalleryWrapper;
