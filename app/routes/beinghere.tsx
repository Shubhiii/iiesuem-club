import React from "react";
import { useEffect, useState } from "react";
import tennis from "~/img/tennis.png";
import couple from "~/img/couple.png";
import trainer from "~/img/trainer.png";
import yoga from "~/img/yoga.png";

function beinghere() {
  return (
    <div>
      <section className="bg-[#FFDEBF] py-16 px-4">
        <div className="w-full">
          <div className="mx-auto max-w-[51.5625rem] h-[16.5rem] mt-20 text-center">
            <h2 className="text-[4rem] leading-[4.5rem] font-semibold text-black">
              We are many different champions, sharing the same court
            </h2>
          </div>
        </div>

        <div className="max-w-[71.5rem] h-[24.3125rem] mx-auto text-left mt-9">
          {/* Inner text content container */}
          <div className="max-w-[38.375rem] space-y-[0.75rem]">
            <h3 className="font-semibold text-[2rem] leading-[2rem] text-black">
              This is How We Play
            </h3>
            <p className="text-[1rem] leading-[2rem] text-gray-800">
              From passionate professionals to everyday team players, we create
              a workplace that brings out your best. Whether it's sports,
              fitness, leisure, or community—our culture is built on energy,
              ownership, and belonging.
            </p>
            <p className="text-[1rem] leading-[2rem] text-gray-800">
              At Ileseum Clubs, it's not just a job. It's a place to grow,
              thrive, and be part of something bigger.
            </p>
          </div>

          <button className="bg-[#83285F] text-white w-[10.875rem] h-[2.5625rem] p-2 mt-6 rounded-full transition hover:brightness-110">
            Check how we hire
          </button>
        </div>

        {/* Image Grid */}
        <div className="max-w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 items-center mt-10">
          <img
            src={couple}
            alt="Couple"
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
          <img
            src={trainer}
            alt="Trainer"
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
          <img
            src={yoga}
            alt="Yoga"
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
          <img
            src={tennis}
            alt="Tennis Coaching"
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default beinghere;
