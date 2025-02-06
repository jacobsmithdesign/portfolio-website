"use client";
import { inter } from "../fonts/fonts";
import { HoverGradient3 } from "../components/hoverGradient";
import { Form } from "react-hook-form";
import ContactForm from "./contact";
import GridBackground from "../ui/gridBackground";
import { useEffect, useState } from "react";
import { animate } from "framer-motion";
export default function Contact() {
  const [animateContent, setAnimateContent] = useState(false);

  // Animate content after fade out
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateContent(true);
    }, 500); // Adjust the timeout as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="py-2 pr-2 md:pl-20 pl-14 flex flex-col h-screen transition-all duration-500 text-dark dark:text-light bg-light dark:bg-dark">
      <div className="border border-dark dark:border-light h-full relative overflow-hidden ">
        <div className="w-full text-center border-b border-dark dark:border-light md:h-24 h-12 group overflow-clip transition-all duration-300">
          <h1
            className={`${inter.className} pl-2 lg:text-8xl md:text-6xl text-5xl overflow-clip text-left font-bold text-tertiary text-light absolute z-10 transition-all duration-500`}
          >
            Contact.
          </h1>
          <HoverGradient3 />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div
            className={`justify-center hide-scrollbar md:px-0 px-2 transition-all duration-500 max-w-[38rem] w-full mx-auto  z-20 ${animateContent ? "opacity-100" : "opacity-0"}`}
          >
            <h1 className="md:text-2xl text-xl font-bold mb-2 text-dark dark:text-light">
              Contact Details
            </h1>
            <a
              href="mailto:jwj.smith98@gmail.com"
              data-flare="Send an email"
              className="flex border border-dark dark:border-light p-1 pl-5 md:hover:text-yellowpastel text-dark dark:text-light"
            >
              <h1 className="md:text-2xl text-xl font-bold  transition-all duration-300 flex">
                jwj.smith98@gmail.com
              </h1>
            </a>
            <a
              href="tel:61406153960"
              data-flare="Call me"
              className="flex border border-t-0 p-1 pl-5 md:hover:text-bluepastel text-dark dark:text-light mb-10"
            >
              <h1 className="md:text-2xl text-xl font-bold  transition-all duration-300">
                +61 406 153 960
              </h1>
            </a>

            <ContactForm />
          </div>
          <GridBackground />
        </div>
      </div>
    </div>
  );
}
