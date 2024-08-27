"use client";
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
export default function Enquiry({ closeForm }) {
  const [state, handleSubmit] = useForm("xzzprorw");
  const [formType, setFormType] = useState<Number>(1);

  if (state.succeeded) {
    return (
      <div className="items-center justify-center text-center h-full flex">
        <div className="">
          <h1 className={` text-4xl text-blue-willow`}>Submission complete!</h1>
          <p className={` text-xl text-blue-willow`}>
            Thanks for reaching out! I'll get back to you as soon as possible.
          </p>
          <button
            onClick={closeForm}
            className={` lg:text-lg md:text-sm text-sm transition-all text-petal md:hover:text-raw-silk md:hover:bg-pollen  h-12 px-4 bg-mahogany/70 border border-petal  md:m-8 m-4`}
          >
            Close window
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-2xl mx-auto h-full overflow-y-scroll hide-scrollbar md:pt-0">
      <form onSubmit={handleSubmit} className="flex flex-col mb-10">
        {" "}
        <div className="w-full justify-between flex items-center">
          <h1 className="text-2xl font-bold mb-2">Make an enquiry</h1>
          <p className={`md:text-lg text-sm`}></p>
        </div>
        {/* Customer details box*/}
        <div className="  md:border-l md:border-r border-t border-b border-dark dark:border-light">
          <div className="flex w-full justify-between">
            <input
              id="firstName"
              name="First name"
              className={`w-1/2 border-r bg-transparent sm:text-lg text-md py-1 border-b  border-dark dark:border-light px-5 text-mahogany/80 placeholder-dark/40 dark:placeholder-light/60 md:text-lg text-sm transition-all duration-500`}
              placeholder="Full Name"
              required
            />
            <input
              id="lastName"
              name="Last name"
              className={`w-1/2 bg-transparent text-md sm:text-lg border-b border-dark dark:border-light px-5 text-mahogany/80 placeholder-dark/40 dark:placeholder-light/60 md:text-lg text-sm transition-all duration-500`}
              placeholder="Last Name"
              required
            />
          </div>
          <input
            id="email"
            name="Email address"
            className={`w-full bg-transparent sm:text-lg text-md py-1 border-b border-dark dark:border-light px-5 text-mahogany/80 placeholder-dark/40 dark:placeholder-light/60 md:text-lg text-sm transition-all duration-500`}
            placeholder="Email Address"
            required
          />
          <div className="flex flex-row">
            <input
              id="phone"
              name="Phone number"
              className={`w-full bg-transparent text-md sm:text-lg text-md py-1 px-5 text-mahogany/80 border-b border-dark dark:border-light placeholder-dark/40 dark:placeholder-light/60 md:text-lg text-sm transition-all duration-500`}
              placeholder="Phone"
            />
          </div>
          <div className="flex flex-row">
            <textarea
              id="phone"
              name="Phone number"
              className={`w-full bg-transparent text-md sm:text-lg text-md py-1 px-5 text-mahogany/80  placeholder-dark/40 dark:placeholder-light/60 md:text-lg text-sm  max-h-96 min-h-20`}
              placeholder="Enquiry"
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
        <div className="flex justify-between">
          <button
            type="submit"
            disabled={state.submitting}
            className={`w-24 text-lg md:hover:text-pollen text-raw-silk text-center mt-2 mb-8 md:hover:bg-raw-silk bg-yellowpastel dark:bg-bluepastel md:hover:bg-greenpastel border border-dark dark:border-light transition-all font-bold`}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
