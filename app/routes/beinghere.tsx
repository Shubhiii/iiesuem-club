import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LOCATIONS } from "~/constants/homepage";

import LEFTARROW from "~/img/leftarrow.svg";
import RIGHTARROW from "~/img/rightarrow.svg";
import tennis from "~/img/tennis.png";
import couple from "~/img/couple.png";
import trainer from "~/img/trainer.png";
import yoga from "~/img/yoga.png";
import study from "~/img/study.png";
import IMG1 from "~/img/img1.svg";
import IMG2 from "~/img/img2.svg";
import IMG3 from "~/img/img3.svg";
import CAREERIMG from "~/img/img4.svg";
import LOCATION1 from "~/img/location1.svg";
import LOCATION2 from "~/img/location2.svg";
import LOCATION3 from "~/img/location3.svg";
import LOCATION4 from "~/img/location4.svg";
import benefit1 from "~/img/benefit1.png";
import benefit2 from "~/img/benefit2.png";
import benefit3 from "~/img/benefit3.png";
import benefit4 from "~/img/benefit4.png";
import benefit5 from "~/img/benefit5.png";
import modalImage from "~/img/modal.svg";

import { useNavigate } from "@remix-run/react";

const images = [LOCATION1, LOCATION2, LOCATION3, LOCATION4]

const NextArrow = ({ onClick, customClass = '' }: any) => (
  <img
    src={RIGHTARROW}
    alt="Next"
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-10 custom-slick-arrow right-arrow w-10 h-10 bg-white rounded-full cursor-pointer ${customClass}`}
  />
);

const PrevArrow = ({ onClick, customClass = '' }: any) => (
  <img
    src={LEFTARROW}
    alt="Previous"
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-10 custom-slick-arrow left-arrow w-10 h-10 bg-white rounded-full cursor-pointer ${customClass}`}
  />
);

const cards = [
  {
    number: "01",
    title: "Enthusiasm",
    description: "We bring energy to everything we do - it's infectious, intentional, and unstoppable.",
  },
  {
    number: "02",
    title: "Humility",
    description: "We leave egos at the door and let our work and teamwork speak for itself.",
  },
  {
    number: "03",
    title: "Desire to Learn",
    description: "Curiosity fuels us. Growth is not a phase, it is a way of life.",
  },
  {
    number: "04",
    title: "Resilience",
    description: "We bounce back, show up stronger, and thrive through every challenge.",
  },
  {
    number: "05",
    title: "Radical Transparency",
    description: "We speak the truth, share openly, and build trust through honesty.",
  },
  {
    number: "06",
    title: "Freedom & Responsibility",
    description: "We own our path, act with intent, and deliver with integrity.",
  },
  {
    number: "07",
    title: "Entrepreneurship",
    description: "We think big, act bold, and treat every challenge like it is ours to solve.",
  },
];
const benefits = [
  {
    icon: benefit1,
    title: "Complimentary access to all club facilities",
  },
  {
    icon: benefit2,
    title: "Epic member + staff events",
  },
  {
    icon: benefit3,
    title: "Real mental wellness support",
  },
  {
    icon: benefit4,
    title: "Family-friendly environments",
  },
  {
    icon: benefit5,
    title: "Flexible schedules that flex with you",
  },
];

const values = [
  {
    title: "Inclusive Spaces",
    description: "We remove barriers,\nbuild bridges",
  },
  {
    title: "Local Love",
    description: "Supporting neighborhoods\nwe’re part of",
  },
  {
    title: "Holistic Wellbeing",
    description: "Physical, emotional,\nmental—we’ve got layers",
  },
];

const renderRow = (items: any[], direction = "left" as any, speed = 100) => {
  const shuffled = [...items].sort(() => Math.random() - 0.5);

  return (
    <Marquee
      // pauseOnHover
      speed={speed}
      direction={direction}
      className="w-full"
    >
      {shuffled.map((location) => (
        <div
          key={location.id}
          className="flex items-center mx-4 md:mx-20 min-w-[200px] max-w-sm"
        >
          <img
            src={location.image}
            alt={location.name}
            className="w-16 md:w-28 h-16 md:h-28 object-cover rounded-md mr-4 md:mr-10"
          />
          <span className="text-black font-semibold text-xl md:text-5xl">{location.name}</span>
        </div>
      ))}
    </Marquee>
  );
};

const imgSlider = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow customClass="right-[-6%]" />,
  prevArrow: <PrevArrow customClass="left-[-6%]" />,
  arrows: true,
};

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "0px",
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  nextArrow: <NextArrow customClass="left-[65%]" />,
  prevArrow: <PrevArrow customClass="left-[32%]" />,
};

function BeingHere() {
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);



  if (!isMounted) return null;

  return (



    <div>
      {/* Section 1 */}
      <section className="bg-[#FFDEBF] py-16">
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
              From passionate professionals to everyday team players, we create a workplace that brings out your best.
            </p>
            <p className="text-[1rem] leading-[1.875rem] text-gray-800">
              At Ileseum Clubs, it's not just a job. It's a place to grow, thrive, and be part of something bigger.
            </p>
          </div>
          <button
            onClick={() => navigate("/how-we-hire")}
            className="bg-[#83285F] text-white w-full sm:w-auto h-[2.5625rem] px-6 mt-6 rounded-full transition hover:brightness-110"
          >
            Check how we hire
          </button>
        </div>

        <Marquee pauseOnHover={false} gradient={false} speed={100}>
          <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-center mt-20 px-4">
            <img src={couple} alt="Couple" className="rounded-xl shadow-md w-full h-auto object-cover" />
            <img src={trainer} alt="Trainer" className="rounded-xl shadow-md w-full h-auto object-cover" />
            <img src={yoga} alt="Yoga" className="rounded-xl shadow-md w-full h-auto object-cover" />
            <img src={tennis} alt="Tennis" className="rounded-xl shadow-md w-full h-auto object-cover" />
          </div>
        </Marquee>
      </section>

      {/* Section 2 */}
      <section className="container mx-auto my-28 px-4 md:px-10 flex items-center justify-center">
        <div className="bg-[#83285F] max-w-[78rem] w-full rounded-3xl flex flex-col md:flex-row overflow-hidden">
          <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10 text-white">
            <div>
              <h2 className="font-semibold text-[2rem] md:text-[3rem] leading-[2.5rem] md:leading-[4.25rem] text-white">
                Our Purpose
              </h2>
              <p className="text-[1.2rem] leading-[2.375rem] mt-3">
                To redefine community living by blending world-class sports, fitness, leisure and wellness into one
                inclusive playground where every member can thrive.
              </p>
              <p className="font-bold text-[1.2rem] leading-[2.375rem] mt-5">
                Our mission is to empower people to live happier, healthier, and fitter lives.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[250px] md:h-auto">
            <img src={study} alt="study" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mb-28 bg-white overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-14 text-black">Our Values</h2>

        <div className="relative max-w-7xl mx-auto px-4">
          <Slider ref={sliderRef} {...settings}>
            {cards.map((card, index) => (
              <div key={index} className="px-16 flex">
                <div className="card-inner relative flex flex-col justify-between rounded-[24px] px-6 py-10 text-center shadow-md transition-all duration-300 w-full bg-white text-black border border-[#7EDFA0]">
                  <div className="mb-5 flex justify-center">
                    <span className="w-20 h-14 rounded-full flex items-center justify-center text-sm font-semibold bg-[#7EDFA0] text-black border border-[#7EDFA0]">
                      {card.number}
                    </span>
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{card.title}</h3>
                  <p className="text-sm leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="bg-[#9BF0B4] py-20 text-black">
        <div className="container mx-auto">
          <div className="text-center px-4">
            <h2 className="text-3xl md:text-6xl font-semibold mb-4">
              Grow with Us
            </h2>
            <p className="text-4xl md:text-lg font-semibold  mb-12">
              At Ileseum, growth goes beyond titles and timelines. With
              state-of-the-art facilities, team challenges, creative freedom, and
              leadership opportunities across clubs, we create space for you to
              level up – personally and professionally.
            </p>

            <div className="text-left mb-8">
              <h3 className="text-4xl font-semibold">Play your part</h3>
              <p className="text-base mt-4">
                Love people? Love movement? Love shaping unforgettable experiences?
                Whether you’re a coach, community lead, or operations pro—we want
                your kind of energy.
              </p>
              <a
                href="#"
                className="inline-block mt-6 text-base"
              >
                See how you can grow your career
                <img className="inline-block w-8 h-8 ml-2" src={RIGHTARROW} alt="arrow" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 mx-auto px-4 py-8">
            {[IMG1, IMG2, IMG3].map((src, index) => {
              const verticalOffset =
                index === 0 ? "mt-20" : index === 2 ? "-mt-20" : "";

              return (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden  ${verticalOffset}`}
                >
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-auto h-[540px] object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>

      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-12">

          <div className="relative w-full md:w-[580px] h-[600px] overflow-hidden rounded-xl shadow-md">
            <img
              src={CAREERIMG}
              alt="Career"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6">
              <p className="text-xl font-bold text-[#812C74]">MORE THAN A JOB</p>
              <p className="text-xl font-bold text-[#F78B28] -mt-1">A JOURNEY</p>
            </div>
          </div>

          <div className="flex-1 flex items-center h-[600px]">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-4xl font-semibold mb-6">
                The Ileseum Career Roadmap
              </h2>
              <p className="text-base md:text-lg text-gray-800 mb-6">
                At Ileseum Clubs, growth is not left to chance; it’s mapped, mentored,
                and made real. From your very first step in, you're on a clearly
                defined journey of professional and personal progression.
              </p>
              <p className="text-base md:text-lg text-gray-800 mb-8">
                Our pathways are designed to elevate, from foundational roles to
                leadership tracks, with every milestone backed by training, coaching,
                and real-time feedback. You don’t just climb here. You evolve, with
                purpose, with pace, and with pride.
              </p>

              <div className="relative">
                <button className="bg-[#812C74] text-white px-6 py-2 rounded-full text-base font-medium hover:brightness-110 transition" onClick={() => setIsOpen(true)}>
                  Know More
                </button>

                {/* Modal Overlay */}
                {isOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

                    <div className="bg-white rounded-lg p-6 w-full md:max-w-7xl mx-4 shadow-lg relative">
                      <div className="flex justify-end font-bold text-3xl" ><button onClick={() => setIsOpen(false)} >X</button></div>
                      <img src={modalImage} alt="" className="h-100 w-100" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className=" text-center pb-0 font-semibold text-5xl ">
          Work From
        </h2>
        <div className="flex flex-col py-20 gap-4 md:gap-10">
          {renderRow(LOCATIONS, "left")}
          {renderRow(LOCATIONS, "right", 50)}
          {renderRow(LOCATIONS, "left",)}
        </div>
      </section>

      <section>
        <div className="mx-auto mt-10 px-44 relative rounded-2xl overflow-hidden">
          <Slider {...imgSlider}>
            {images.map((src, index) => (
              <div key={index}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full container mx-auto object-cover rounded-2xl"
                />
              </div>
            ))}
          </Slider>
        </div>

      </section>
      <section>
        {/* Top Section */}
        <div className="text-center px-4 py-12">
          <h2 className="text-3xl md:text-5xl font-semibold">Our Benefits</h2>
          <p className="mt-3 max-w-3xl mx-auto text-lg font-semibold">
            At Ilseum, benefits aren’t checkboxes—they’re built to fuel your lifestyle,
            power your goals, and support your everyday grind.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            {benefits.map((item, i) => (
              <div key={i} className="flex items-start gap-4 text-left">
                <img src={item.icon} alt="icon" className="h-12 w-12 object-contain" />
                <div>
                  <p className="font-medium text-lg">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#83285F] text-white text-center px-6 mt-4 py-16">
          <h3 className="text-2xl md:text-4xl font-semibold">Feel At Home At Work</h3>
          <p className="mt-4 max-w-4xl mx-auto text-lg">
            We walk the talk. Our clubs are designed for all bodies, all backgrounds, all vibes. <br />
            We’re inclusive by intention, community-driven by design.
          </p>

          <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
            {values.map((val, i) => (
              <div
                key={i}
                className="bg-[#7EDFA0] text-gray-900 p-6 rounded-xl text-left"
              >
                <h4 className="text-3xl font-semibold mb-2">{val.title}</h4>
                <p className="whitespace-pre-line text-md">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BeingHere;
