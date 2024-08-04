"use client";
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
export default function WeddingEnquiry({ closeForm }) {
  const [state, handleSubmit] = useForm("xzzprorw");
  const [formType, setFormType] = useState<Number>(1);

  if (state.succeeded) {
    return (
      <div className="items-center justify-center text-center h-full flex">
        <div className="">
          <h1 className={` text-4xl text-blue-willow`}>Submission complete!</h1>
          <p className={` text-xl text-blue-willow`}>
            Thank you for your enquiry, we will get back to you as soon as
            possible.
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
        {/* Customer details box*/}
        <div className="w-full">
          <h2
            className={` sm:text-xl text-md pl-2 pt-4 text-blue-willow w-full border-b-2 border-blue-willow`}
          >
            contact details
          </h2>
          <div className="flex w-full justify-between">
            <input
              id="firstName"
              type="firstName"
              name="First name"
              className={` w-[49%] bg-raw-silk/0 sm:text-lg text-md py-1 border-b  border-blue-willow px-5 text-mahogany/80 `}
              placeholder="First Name"
              required
            />
            <input
              id="lastName"
              type="lastName"
              name="Last name"
              className={` w-[49%]  bg-raw-silk/0 text-md sm:text-lg  border-b  border-blue-willow px-5 text-mahogany/80`}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="flex w-full justify-between">
            <input
              id="partnerFirstName"
              type="firstName"
              name="Partner first name"
              className={` w-[49%] bg-raw-silk/0 sm:text-lg text-md py-1 border-b  border-blue-willow px-5 text-mahogany/80 `}
              placeholder="Partner First Name"
              required
            />
            <input
              id="lastName"
              type="lastName"
              name="Partner last name"
              className={` w-[49%]  bg-raw-silk/0 text-md sm:text-lg  border-b  border-blue-willow px-5 text-mahogany/80`}
              placeholder="Partner Last Name"
              required
            />
          </div>
          <input
            id="email"
            type="email"
            name="Email address"
            className={` w-full bg-raw-silk/0 sm:text-lg text-md py-1 border-b border-blue-willow px-5 text-mahogany/80`}
            placeholder="Email Address"
            required
          />
          <div className="flex flex-row">
            <input
              id="phone"
              type="phone"
              name="Phone number"
              className={` w-full bg-raw-silk/0 text-md sm:text-lg text-md py-1 px-5 text-mahogany/80 border-b border-blue-willow`}
              placeholder="Phone"
              required
            />
          </div>
        </div>

        {/* Weddings Details */}

        <div className="flex flex-col">
          <h2
            className={` sm:text-xl text-md pl-2 pt-8 text-blue-willow w-full border-b-2 border-blue-willow`}
          >
            wedding details
          </h2>
          <div className="flex justify-between">
            <input
              id="date"
              type="date"
              name="Date"
              className={`  w-full bg-raw-silk/0 text-md sm:text-lg text-md text-center py-1 border-b border-blue-willow px-5 text-mahogany/80`}
              required
            />
          </div>
          <textarea
            id="venues"
            name="Venues and start times"
            className={` min-h-10 bg-raw-silk/0 text-md sm:text-lg text-md max-h-36  text-center py-1 px-5 text-mahogany/80 border-b border-blue-willow`}
            placeholder="Ceremony & reception venue/s and approximate start times"
            required
          />
        </div>
        <div className="flex flex-col">
          <h2
            className={` sm:text-xl text-md pl-2 pt-8 border-b-2 border-blue-willow text-blue-willow w-full`}
          >
            floral wishlist
          </h2>
          <textarea
            id="wishlist"
            name="Floral wishlist"
            className={` bg-raw-silk/0 min-h-10 max-h-36 text-md sm:text-lg text-center py-1 px-5 text-mahogany/80 border-b border-blue-willow`}
            placeholder={`Eg: number of bridesmaids bouquets, arbour florals, welcome sign, bridal table florals`}
            required
          />
        </div>
        <h2
          className={` sm:text-xl text-md pl-2 pt-8 text-blue-willow w-full border-b-2 border-blue-willow`}
        >
          floral investment
        </h2>
        <select
          name="Investment range"
          required
          className={` bg-raw-silk/0 text-md sm:text-lg text-center py-1 border-b border-blue-willow px-5 text-mahogany/80 `}
        >
          <option value="35000-5000" className={` text-lg`}>
            $3500 - $5000
          </option>
          <option value="5000-8000" className={` text-lg`}>
            $5000 - $8000
          </option>
          <option value="8000-10000" className={` text-lg`}>
            $8000 - $10000
          </option>
          <option value="10000-12000" className={` text-lg`}>
            $10000 - $12000
          </option>
          <option value="9000+" className={` text-lg`}>
            $12000+
          </option>
        </select>
        <h2
          className={` sm:text-xl text-md pl-2 pt-8 text-blue-willow w-full border-b-2 border-blue-willow`}
        >
          reception type
        </h2>
        <select
          name="Reception type"
          required
          className={` bg-raw-silk/0 text-md sm:text-lg text-center py-1 border-b border-blue-willow px-5 text-mahogany/80 `}
        >
          <option value="Sit down" className={` text-lg`}>
            Sit down
          </option>
          <option value="Cocktail" className={` text-lg`}>
            Cocktail
          </option>
          <option value="TBC" className={` text-lg`}>
            TBC
          </option>
        </select>
        <h2
          className={` sm:text-xl text-md pl-2 pt-8 text-blue-willow w-full border-b-2 border-blue-willow`}
        >
          estimated guest count
        </h2>
        <input
          id="guest"
          type="value"
          name="Guest count"
          className={` w-full bg-raw-silk/0 sm:text-lg text-md py-1 border-b border-blue-willow px-5 text-mahogany/80`}
          placeholder="Estimated guest count"
          required
        />
        <div className="flex flex-col">
          <h2
            className={` sm:text-xl text-md pl-2 pt-8 text-blue-willow w-full border-b-2 border-blue-willow`}
          >
            style of wedding and colour palette
          </h2>
          <textarea
            id="style"
            name="Style (romantic, whimsical, classic etc.)"
            className={` bg-raw-silk/0 min-h-10 max-h-36 text-md sm:text-lg text-center py-2 px-5 text-mahogany/80`}
            placeholder={`Eg. Elegant, sleek, romantic, whimsical, organic, bold, pastel, earthy, neutral`}
            required
          />
        </div>
        <div className="flex flex-col">
          <h2
            className={` sm:text-xl text-md pl-2 pt-8 text-blue-willow w-full border-b-2 border-blue-willow`}
          >
            how did you hear about us?
          </h2>
          <select
            name="How did you hear about us?"
            required
            className={` bg-raw-silk/0 text-md sm:text-lg text-center py-1 px-5 text-mahogany/80 border-b border-blue-willow`}
          >
            <option
              className="text-lg"
              value=""
              selected={true}
              disabled={true}
            >
              Please Select
            </option>
            <option className="text-lg">Instagram</option>

            <option className="text-lg">Facebook</option>

            <option className="text-lg">Pinterest</option>

            <option className="text-lg">Google</option>

            <option className="text-lg">Recommended</option>

            <option className="text-lg">Attended an event we flowered</option>
          </select>
        </div>
        <div className="flex flex-col">
          <h2
            className={` sm:text-xl text-md pl-2 pt-8 border-b-2 border-blue-willow text-blue-willow w-full`}
          >
            Link an optional pinterest board
          </h2>
          <input
            id="pinterest"
            name="Optional pinterest board"
            className={` bg-raw-silk/0 text-md sm:text-lg text-center py-1 px-5 text-mahogany/80 border-b border-blue-willow`}
            placeholder={`Eg: https://www.pinterest.com/username/board-name
          `}
          />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className={` rounded-lg mx-auto w-36 text-lg md:hover:text-pollen text-raw-silk text-center pt-1 mt-8 mb-8 md:hover:bg-raw-silk bg-pollen border border-raw-silk transition-all`}
        >
          submit
        </button>
      </form>
    </div>
  );
}
