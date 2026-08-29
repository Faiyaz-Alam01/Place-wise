
import React from "react";
import { FaStar } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="mx-auto flex min-h-[600px] max-w-7xl flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:gap-16 lg:px-8 lg:py-20">

        {/* LEFT */}
        <div className="w-full lg:w-1/2">

          {/* Small Badge */}
          <p className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium">
            <FaStar className="text-purple-500" />
            <span className="text-slate-900">
              Your Dream Job Starts Here
            </span>
          </p>

          {/* Main Heading */}
          <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Prepare Smarter.
            <br />
            <span className="text-purple-600">
              Get Placed Faster.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Build your profile, improve your skills, discover opportunities,
            and track your placement preparation — all in one place.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition hover:bg-purple-700">
              Get Started
            </button>

            <button className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-50">
              Explore Features
            </button>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex w-full justify-center lg:w-1/2">
          <img
            src="/heroImg.png"
            alt="Student preparing for placement"
            className="h-auto w-full max-w-lg object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
