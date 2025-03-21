"use client";
import { inter } from "../fonts/fonts";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Arrow from "../../public/diagonal-arrow.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { animate } from "framer-motion";
import Link from "next/link";
import GridBackground from "../ui/gridBackground";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xzzprorw");
  const [animateContent, setAnimateContent] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateContent(true);
      setInitialLoad(false);
    }, 500); // Adjust the timeout as needed

    return () => clearTimeout(timeout);
  }, [state]);

  if (state.succeeded) {
    return (
      <div className={`mx-auto h-full w-full`}>
        <div className="w-full max-w-[38rem] mx-auto flex flex-col h-full justify-center">
          <h1 className="text-2xl font-bold mb-2">Submission complete</h1>
          <p className={`md:text-lg text-sm`}>
            Thanks for Reaching out! I&apos;ll get in touch soon.
          </p>
          <Link data-flare=" " href={"/"}>
            <button
              className={`w-32 text-lg text-light md:hover:text-pollen text-raw-silk text-center mt-2 mb-8 md:hover:bg-raw-silk bg-accent md:hover:bg-bluepastel border border-dark dark:border-light transition-all font-bold`}
            >
              Return home
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={`w-full`}>
      <h1 className="md:text-2xl text-xl font-bold mb-2 text-dark dark:text-light">
        Make an enquiry
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto flex flex-col h-full justify-center "
      >
        <div className="w-full justify-between flex items-center"></div>
        {/* Customer details box*/}
        <div className="border border-dark dark:border-light dark:bg-dark bg-light">
          <div className="flex w-full justify-between">
            <input
              data-flare=" "
              id="firstName"
              name="First name"
              className={`w-1/2 border-r bg-transparent sm:text-lg text-md py-1 border-b  border-dark dark:border-light px-5 text-mahogany/80 placeholder-dark/40 dark:placeholder-light/60 md:text-lg text-sm transition-all duration-500`}
              placeholder="First Name*"
              required
            />
            <input
              data-flare=" "
              id="lastName"
              name="Last name"
              className={`w-1/2 bg-transparent text-md sm:text-lg border-b border-dark dark:border-light px-5 text-mahogany/80 placeholder-dark/40 dark:placeholder-light/60 md:text-lg text-sm transition-all duration-500`}
              placeholder="Last Name*"
              required
            />
          </div>
          <input
            data-flare=" "
            id="email"
            name="Email address"
            className={`w-full bg-transparent sm:text-lg text-md py-1 border-b border-dark dark:border-light px-5 text-mahogany/80 placeholder-dark/40 dark:placeholder-light/60 md:text-lg text-sm transition-all duration-500`}
            placeholder="Email Address*"
            required
          />
          <div className="flex flex-row">
            <input
              data-flare=" "
              id="phone"
              name="Phone number"
              className={`w-full bg-transparent text-md sm:text-lg text-md py-1 px-5 text-mahogany/80 border-b border-dark dark:border-light placeholder-dark/40 dark:placeholder-light/60 md:text-lg text-sm transition-all duration-500`}
              placeholder="Phone"
            />
          </div>
          <div className="flex flex-row">
            <textarea
              data-flare=" "
              id="phone"
              name="Phone number"
              className={`w-full bg-transparent text-md sm:text-lg text-md py-1 px-5 text-mahogany/80  placeholder-dark/40 dark:placeholder-light/60 md:text-lg text-sm  max-h-96 min-h-20`}
              placeholder="Enquiry*"
              required
            />
          </div>
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          data-flare=" "
          disabled={state.submitting}
          className={`w-24 text-lg md:hover:text-pollen text-raw-silk text-center mt-2 md:hover:bg-raw-silk bg-yellowpastel dark:bg-bluepastel md:hover:bg-greenpastel border border-dark dark:border-light transition-all font-bold`}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
