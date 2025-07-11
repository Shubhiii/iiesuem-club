import type { MetaFunction } from "@remix-run/node";
import SOUNDS_GOOD from "~/img/sounds-good.svg";
<<<<<<< HEAD
import PUNE from "~/img/pune.svg";
import CHARHOLI from "~/img/charholi.svg";
import THANE from "~/img/thane.svg";
import SOLAPUR from "~/img/solapur.svg";
import NAVI_MUMBAI from "~/img/navi_mumbai.svg";
import MULUND from "~/img/mulund.svg";
import PANVEL from "~/img/panvel.svg";
import CHENNAI from "~/img/chennai.svg";
import WHO_WE_ARE from "~/img/who_we_are.svg";
import WHERE_WE_BELONG from "~/img/where_we_belong.svg";
import HOW_WE_ACT from "~/img/how_we_act.svg";
import LANDING_PAGE from "~/img/landing_page.svg";
import SEARCH from "~/img/search.svg";
import RIGHT_ARROW from "~/img/right_arrow.svg";
=======
import LANDING_PAGE from "~/img/landing_page.svg"
import SEARCH from "~/img/search.svg"
import RIGHT_ARROW from "~/img/right_arrow.svg"
>>>>>>> 7c573e493366a66c9c669c545ccaf2ace311659a
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import { BUTTON, CROUSEL, JOB_LIST, JOBS_CARD, LOCATIONS } from "~/constants/homepage";
import { useNavigate } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Ilesuem Club" },
    { name: "description", content: "Welcome to Ilesuem Club!" },
  ];
};

<<<<<<< HEAD
const JOB_LIST = [
  { title: "Club Manager", locations: ["Pune", "Mumbai", "Chennai"] },
  { title: "Corporate Sales, CSO", locations: ["Pune"] },
  { title: "Sports Manager", locations: ["Mumbai", "Pune"] },
  { title: "Customer Support Executives", locations: ["Chennai", "Mumbai"] },
  // { title: "Club Manager", locations: ["Pune", "Mumbai", "Chennai"] },
  // { title: "Corporate Sales, CSO", locations: ["Pune"] },
  // { title: "Sports Manager", locations: ["Mumbai", "Pune"] },
  // { title: "Customer Support Executives", locations: ["Chennai", "Mumbai"] },
];

const CROUSEL = [
  {
    id: 1,
    topic: "Who we are",
    image: WHO_WE_ARE,
    title: "High Performers. Big Believers. Mr. Nice Guys.",
    description:
      "We bring the hustle and the heart, pushing limits, playing fair, and showing up for each other every step of the way.",
    btn: "Read more",
  },
  {
    id: 2,
    topic: "Where we belong",
    image: WHERE_WE_BELONG,
    title: "Every Goal Needs A Team",
    description:
      "We’re built on high-fives and high-performance, so whether you’re smashing a PB or trying your very first burpee, you’ll always find your people here.",
    btn: "Check how we hire",
  },
  {
    id: 3,
    topic: "How we act",
    image: HOW_WE_ACT,
    title: "Sweat & Celebrate",
    description:
      "We don’t just push limits, we lift each other up. Day in, day out, we drive results for our members and a better, healthier community for all.",
    btn: "Join the tribe",
  },
];

const JOBS_CARD = [
  { id: 0, category: "Trainers", title: "Sports Manager", location: "Mumbai" },
  {
    id: 1,
    category: "Manager",
    title: "Club Manager",
    location: ["Mumbai", "Pune", "Chennai"],
  },
  {
    id: 2,
    category: "Trainers",
    title: "Male & Female Trainers",
    location: "Chennai",
  },
];

const BUTTON = [
  { id: 0, name: "How we hire", link: "" },
  { id: 1, name: "Apply now", link: "" },
];

const LOCATIONS = [
  { id: 0, name: "Pune", image: PUNE },
  { id: 1, name: "Charholi", image: CHARHOLI },
  { id: 2, name: "Thane", image: THANE },
  { id: 3, name: "Solapur", image: SOLAPUR },
  { id: 4, name: "Navi Mumbai", image: NAVI_MUMBAI },
  { id: 5, name: "Mulund", image: MULUND },
  { id: 6, name: "Panvel", image: PANVEL },
  { id: 7, name: "Chennai", image: CHENNAI },
];

=======
>>>>>>> 7c573e493366a66c9c669c545ccaf2ace311659a
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
<<<<<<< HEAD
          <span className="text-black font-semibold text-5xl">
            {location.name}
          </span>
=======
          <span className="text-black font-semibold text-xl md:text-5xl">{location.name}</span>
>>>>>>> 7c573e493366a66c9c669c545ccaf2ace311659a
        </div>
      ))}
    </Marquee>
  );
};

export default function Index() {
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Now it's safe to access window

    const checkScreen = () => setIsLargeScreen(window.innerWidth > 768);
    checkScreen();

    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${LANDING_PAGE})` }}
      >
        <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-center gap-8 md:gap-0 md:justify-between md:items-center h-full">
          <div className="md:max-w-md text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-semibold mb-6">Join the Tribe</h1>
            <button onClick={() => navigate('/jobs')} className="bg-white text-black px-6 py-2 rounded-full text-xs md:text-lg font-medium hover:bg-gray-200 transition">
              Explore All Jobs
            </button>
          </div>
<<<<<<< HEAD
          <div className="flex flex-col gap-12 w-4/12">
            {JOB_LIST.map((job, idx) => (
              <div
                key={idx}
                className={`bg-green-300 text-black px-4 py-4 rounded-md w-72 shadow-md ${
                  idx % 2 === 0 ? "ml-auto" : ""
                }`}
              >
                <p className="text-sm mb-1">{job.locations.join(", ")}</p>
                <p className="text-lg font-semibold">{job.title}</p>
              </div>
            ))}
          </div>
=======

          {isLargeScreen ? (
            <div className="flex flex-col gap-8 w-4/12">
              {JOB_LIST.slice(0, 4).map((job, idx) => (
                <div
                  key={idx}
                  className={`bg-green text-black px-4 py-4 rounded-md w-72 shadow-md ${idx % 2 === 0 ? 'ml-auto' : ''}`}
                >
                  <p className="text-sm mb-1">{job.locations.join(", ")}</p>
                  <p className="text-lg font-semibold">{job.title}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex gap-4">
              <Marquee direction="left">
                <div className="flex gap-4">
                  {JOB_LIST.map((job, idx) => (
                    <div
                      key={idx}
                      className={`bg-green text-black px-4 py-4 rounded-md shadow-md`}
                    >
                      <p className="text-sm mb-1">{job.locations.join(", ")}</p>
                      <p className="text-lg font-semibold">{job.title}</p>
                    </div>
                  ))}
                  </div>
              </Marquee>
            </div>
          )}
>>>>>>> 7c573e493366a66c9c669c545ccaf2ace311659a
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-11/12 max-w-5xl">
          <div className="bg-white/30 backdrop-blur-sm flex items-center justify-between px-6 py-3 rounded-full">
            <div className="flex items-center gap-3 w-full">
              <div className="w-5 h-5">
                {<img src={SEARCH} alt="search" className="w-full h-full" />}
              </div>
              <input
                type="text"
                placeholder="Search job and keywords"
                className="bg-transparent text-black placeholder-black focus:outline-none w-full"
              />
            </div>

            <button className=" rounded-full  flex items-center justify-center ml-4">
              {<img src={RIGHT_ARROW} alt="go" className="w-12 h-12" />}
            </button>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {CROUSEL.map((item) => (
        <div
          className="bg-white sticky top-0 py-20 border-black border-t rounded-3xl rounded-b-none"
          key={item.id}
        >
          <div className="container mx-auto px-4 md:px-0">
            <p className="text-black font-medium text-lg mb-6 flex items-center gap-2">
              <span className="border border-black rounded-full w-6  h-6 flex items-center justify-center text-sm">
                {item.id}
              </span>
              {item.topic}
            </p>
=======


      <div className="-mt-6">
        {CROUSEL.map((item, index) => (
          <div className={`bg-white sticky top-20 py-5 md:py-20 border-black ${index !== 0 && 'border-t'} rounded-3xl rounded-b-none`} key={item.id}>
            <div className="container mx-auto px-4 md:px-0">
              <p className="text-black font-medium text-lg mb-6 flex items-center gap-2">
                <span className="border border-black rounded-full w-6  h-6 flex items-center justify-center text-sm">
                  {item.id}
                </span>
                {item.topic}
              </p>
>>>>>>> 7c573e493366a66c9c669c545ccaf2ace311659a

              <div className="flex flex-col text-black lg:flex-row items-center justify-evenly gap-4 md:gap-20">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-2xl w-96  object-cover"
                />

                <div className="max-w-xl">
                  <h2 className="text-1xl lg:text-4xl font-semibold mb-3 md:mb-6 leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 text-sm md:text-lg mb-6">{item.description}</p>
                  <button className="bg-purple border border-purple hover:bg-transparent text-white text-sm md:text-lg px-8 py-3 rounded-full hover:text-purple transition-all">
                    {item.btn}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

<<<<<<< HEAD
      <div className="bg-purple py-20 relative">
        <h1 className="text-white text-5xl text-center font-semibold mb-12">
=======



      <div className="bg-purple py-10 md:py-20 px-5 md:px-0 relative">
        <h1 className="text-white text-3xl md:text-5xl text-center font-semibold mb-12">
>>>>>>> 7c573e493366a66c9c669c545ccaf2ace311659a
          Featured Jobs
        </h1>

        <div className="flex justify-center gap-5 md:gap-10 flex-wrap relative">
          {JOBS_CARD.map((job, index) => {
            return (
              <div
                key={index}
                className={
                  "w-96 p-6 rounded-3xl flex flex-col items-center text-center bg-transparent border border-white text-white hover:bg-cream hover:border-cream hover:text-black transition-all"
                }
              >
                <div className="bg-white text-black text-xs px-4 py-1 rounded-full mb-6 ">
                  {job.category}
                </div>

                <h2 className="text-2xl font-semibold leading-snug mb-6">
                  {job.title}
                </h2>

                <div className="space-y-1 text-base font-medium">
                  {Array.isArray(job.location)
                    ? job.location.map((loc, i) => <div key={i}>{loc}</div>)
                    : job.location}
                </div>
              </div>
            );
          })}
        </div>
      </div>

<<<<<<< HEAD
      <div className="bg-white py-20 relative">
        <div className="flex flex-col items-center space-y-6 text-black text-center px-4 mb-20">
          <h1 className="font-semibold text-5xl">Here, There, Everywhere</h1>

          <p className="max-w-120 ">
            Our spaces go beyond fitness; they’re built for{" "}
            <span className="md:block">
              belonging, balance, and everything in between. And
            </span>{" "}
            this is only the beginning.
          </p>
=======






      <div className="bg-white py-10 md:py-20 relative">
        <div className="flex flex-col items-center space-y-6 text-black text-center px-4 mb-20">

          <h1 className="font-semibold text-2xl md:text-5xl">Here, There, Everywhere</h1>

          <p className="max-w-120">
            Our spaces go beyond fitness; they’re built for <span className="md:block">belonging, balance, and everything in between. And</span> this is only the beginning.</p>
>>>>>>> 7c573e493366a66c9c669c545ccaf2ace311659a

          <div className="flex gap-4">
            <button className="px-14 py-4 text-white bg-purple text-sm border rounded-full hover:bg-white hover:text-purple transition-all">
              See all locations
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-10">
            {renderRow(LOCATIONS, "left")}
            {renderRow(LOCATIONS, "right", 50)}
<<<<<<< HEAD
            {renderRow(LOCATIONS, "left")}
          </div>
        )}
=======
            {renderRow(LOCATIONS, "left",)}
        </div>
>>>>>>> 7c573e493366a66c9c669c545ccaf2ace311659a
      </div>

      <div className="bg-purple py-10 md:py-20 relative">
        <div className="flex flex-col items-center space-y-4 md:space-y-6 text-center px-4 text-white">
          <img className="w-20 h-20" src={SOUNDS_GOOD} alt="Sounds Good" />

          <h1 className="font-semibold text-3xl md:text-5xl">Sound Good?</h1>

<<<<<<< HEAD
          <p className="max-w-120 ">
            Get to know our hiring process before you apply or find{" "}
            <span className="md:block">
              {" "}
              answers to any lingering questions, right here, right now.
            </span>
=======
          <p className="max-w-120 text-sm md:text-base">
            Get to know our hiring process before you apply or find <span className="md:block"> answers to any lingering questions, right here, right now.</span>
>>>>>>> 7c573e493366a66c9c669c545ccaf2ace311659a
          </p>

          <div className="flex gap-4">
            {BUTTON.map((btn) => (
              <a
                key={btn.id}
                href={btn.link}
                className="px-7 py-2 text-white text-sm border rounded-full  hover:bg-white hover:text-purple transition-all"
              >
                {btn.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
