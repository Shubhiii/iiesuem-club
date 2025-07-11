import React, { useState } from "react";
import tennis from "~/img/tennis.png";
import couple from "~/img/couple.png";
import trainer from "~/img/trainer.png";
import yoga from "~/img/yoga.png";
import study from "~/img/study.png";

const cards = [
  {
    number: "01",
    title: "Enthusiasm",
    description:
      "We bring energy to everything we do - it's infectious, intentional, and unstoppable.",
  },
  {
    number: "02",
    title: "Humility",
    description:
      "We leave egos at the door and let our work and teamwork speak for itself.",
  },
  {
    number: "03",
    title: "Desire to Learn",
    description:
      "Curiosity fuels us. Growth is not a phase, it is a way of life.",
  },
  {
    number: "04",
    title: "Resilience",
    description:
      "We bounce back, show up stronger, and thrive through every challenge.",
  },
  {
    number: "05",
    title: "Radical Transparency",
    description:
      "We speak the truth, share openly, and build trust through honesty.",
  },
  {
    number: "06",
    title: "Freedom & Responsibility",
    description:
      "We own our path, act with intent, and deliver with integrity.",
  },
  {
    number: "07",
    title: "Entrepreneurship",
    description:
      "We think big, act bold, and treat every challenge like it is ours to solve.",
  },
];

function BeingHere() {
  const [activeIndex, setActiveIndex] = useState(1);

  const prevIndex = (activeIndex - 1 + cards.length) % cards.length;
  const nextIndex = (activeIndex + 1) % cards.length;

  const handlePrev = () => {
    if (activeIndex > 1) {
      setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }
  };

  const handleNext = () => {
    if (activeIndex < cards.length - 2) {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }
  };

  return (
    <div>
      {/* First content */}
      <section className="bg-[#FFDEBF] py-16 px-4">
        <div className="w-full">
          <div className="mx-auto max-w-[51.5625rem] mt-16 text-center px-2">
            <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] leading-tight md:leading-[4.5rem] font-semibold text-black">
              We are many different champions, sharing the same court
            </h2>
          </div>
        </div>

        <div className="max-w-[71.5rem] mx-auto text-left mt-20 px-2">
          <div className="max-w-[38.375rem] space-y-4">
            <h3 className="font-semibold text-[1.5rem] md:text-[2rem] leading-snug text-black">
              This is How We Play
            </h3>
            <p className="text-[1rem] leading-[1.875rem] text-gray-800">
              From passionate professionals to everyday team players, we create
              a workplace that brings out your best. Whether it's sports,
              fitness, leisure, or community—our culture is built on energy,
              ownership, and belonging.
            </p>
            <p className="text-[1rem] leading-[1.875rem] text-gray-800">
              At Ileseum Clubs, it's not just a job. It's a place to grow,
              thrive, and be part of something bigger.
            </p>
          </div>
          <button className="bg-[#83285F] text-white w-full sm:w-auto h-[2.5625rem] px-6 mt-6 rounded-full transition hover:brightness-110">
            Check how we hire
          </button>
        </div>

        <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-center mt-20 p-5">
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

      {/* Section 2: Purpose */}
      <section className="container my-28 px-4 md:px-10 flex items-center justify-center">
        <div className="bg-[#83285F] max-w-[78rem] w-full rounded-3xl flex flex-col md:flex-row overflow-hidden">
          <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10 text-white">
            <div>
              <h2 className="font-cairo font-semibold text-[2rem] md:text-[3rem] leading-[2.5rem] md:leading-[4.25rem] text-white">
                Our Purpose
              </h2>
              <p className="font-openSans font-normal text-[1.1rem] md:text-[1.2rem] leading-[2rem] md:leading-[2.375rem] mt-3 pr-0 md:pr-2">
                To redefine community living by blending world-class sports,
                fitness, leisure and wellness into one inclusive playground
                where every member can thrive.
              </p>
              <p className="font-openSans font-bold text-[1.1rem] md:text-[1.2rem] leading-[2rem] md:leading-[2.375rem] mt-5 pr-0 md:pr-2">
                Our mission is to empower people to live happier, healthier, and
                fitter lives.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[250px] md:h-auto">
            <img
              src={study}
              alt="study"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Values Carousel */}
      <section className="mb-28 bg-white overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-14 text-black">
          Our Values
        </h2>

        {/* Large Screens Layout */}
        <div className="hidden lg:flex items-center justify-center gap-6 px-4">
          {/* First Card */}
          <div className="w-[432px] h-[392px] rounded-[32px] border-[2px] border-[#7EDFA0] bg-white px-[40px] py-[40px] text-center shadow-md transition-all duration-300">
            <div className="mb-7 flex justify-center">
              <span className="w-[90px] h-[57px] px-[10px] py-[10px] rounded-full text-lg font-semibold bg-[#7EDFA0] text-black flex items-center justify-center">
                {cards[(activeIndex - 1 + cards.length) % cards.length].number}
              </span>
            </div>
            <h3 className="font-semibold text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] mb-4 text-black">
              {cards[(activeIndex - 1 + cards.length) % cards.length].title}
            </h3>
            <p className="text-[1.3rem] leading-relaxed text-black">
              {
                cards[(activeIndex - 1 + cards.length) % cards.length]
                  .description
              }
            </p>
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="w-10 h-10 border border-black text-black rounded-full flex items-center justify-center text-xl hover:bg-gray-100 transition"
          >
            &#x1F850;
          </button>

          {/* Center Card */}
          <div className="w-[432px] h-[392px] rounded-[32px] bg-[#7EDFA0] px-[40px] py-[40px] text-center shadow-md transition-all duration-300 text-white">
            <div className="mb-7 flex justify-center">
              <span className="w-[90px] h-[57px] px-[10px] py-[10px] rounded-full text-lg font-semibold bg-white text-black flex items-center justify-center">
                {cards[activeIndex].number}
              </span>
            </div>
            <h3 className="font-semibold text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] mb-4 text-black">
              {cards[activeIndex].title}
            </h3>
            <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.3rem] leading-relaxed text-black">
              {cards[activeIndex].description}
            </p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="w-10 h-10 border border-black text-black rounded-full flex items-center justify-center text-xl hover:bg-gray-100 transition"
          >
            &#x1F852;
          </button>

          {/* Third Card */}
          <div className="w-[432px] h-[392px] rounded-[32px] border-[2px] border-[#7EDFA0] bg-white px-[40px] py-[40px] text-center shadow-md transition-all duration-300">
            <div className="mb-7 flex justify-center">
              <span className="w-[90px] h-[57px] px-[10px] py-[10px] rounded-full text-lg font-semibold bg-[#7EDFA0] text-black flex items-center justify-center">
                {cards[(activeIndex + 1) % cards.length].number}
              </span>
            </div>
            <h3 className="font-semibold text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] mb-4 text-black">
              {cards[(activeIndex + 1) % cards.length].title}
            </h3>
            <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.3rem] leading-relaxed text-black">
              {cards[(activeIndex + 1) % cards.length].description}
            </p>
          </div>
        </div>

        {/* Small Screens Layout */}
        <div className="flex flex-col items-center justify-center px-4 gap-6 lg:hidden">
          {/* Active Card Only */}
          <div className="w-full max-w-[432px] h-[392px] rounded-[32px] bg-[#7EDFA0] px-[40px] py-[40px] text-center shadow-md transition-all duration-300 text-white">
            <div className="mb-7 flex justify-center">
              <span className="w-[90px] h-[57px] px-[10px] py-[10px] rounded-full text-lg font-semibold bg-white text-black flex items-center justify-center">
                {cards[activeIndex].number}
              </span>
            </div>
            <h3 className="font-semibold text-[2rem] mb-4 text-black">
              {cards[activeIndex].title}
            </h3>
            <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.3rem] leading-relaxed text-black">
              {cards[activeIndex].description}
            </p>
          </div>

          {/* Arrows Below Card */}
          <div className="flex justify-center gap-6 mt-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 border border-black text-black rounded-full flex items-center justify-center text-xl hover:bg-gray-100 transition"
            >
              &#x1F850;
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 border border-black text-black rounded-full flex items-center justify-center text-xl hover:bg-gray-100 transition"
            >
              &#x1F852;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BeingHere;
