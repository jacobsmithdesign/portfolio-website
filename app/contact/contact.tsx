"use client";
import { inter } from "../fonts/fonts";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Arrow from "../../public/diagonal-arrow.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { animate } from "framer-motion";
import { StructuredText } from "react-datocms";
import { HoverGradient3 } from "../components/hoverGradient";

export function ContactWrapper() {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleClose = () => {
    setSelectedContact(null);
  };

  return (
    <div className="py-2 pr-2 md:pl-20 pl-14 flex flex-col h-screen transition-all duration-500 text-dark dark:text-light">
      <div className="border border-dark dark:border-light h-full relative overflow-hidden">
        <div className="w-full text-center border-b border-dark dark:border-light md:h-24 h-12 group overflow-clip transition-all duration-300">
          <h1
            className={`${inter.className} pl-2 lg:text-8xl md:text-6xl text-5xl overflow-clip text-left font-bold text-tertiary text-light absolute z-10 transition-all duration-500`}
          >
            Contact.
          </h1>
          <HoverGradient3 />
        </div>
        <div className="overflow-y-scroll h-full hide-scrollbar md:pb-24 pb-12 transition-all duration-500"></div>
      </div>
    </div>
  );
}

export default ContactWrapper;
