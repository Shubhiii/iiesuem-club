import { MetaFunction } from "@remix-run/node";
import Accordion from "~/components/accordion";
import CARD1 from "~/img/card1.svg";
import CARD2 from "~/img/card2.svg";
import CARD3 from "~/img/card3.svg";
import CARD4 from "~/img/card4.svg";
import CARD5 from "~/img/card5.svg";
import RIGHTARROW from "~/img/rightarrow.svg";
import LEFTARROW from "~/img/leftarrow.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
    return [
        { title: "How We Hire | Ilesuem Club" },
        { name: "description", content: "How We Hire | Welcome to Ilesuem Club!" },
    ];
};


const NextArrow = ({ onClick }: any) => (
    <img
        src={RIGHTARROW}
        alt="Next"
        onClick={onClick}
        className="custom-slick-arrow right-arrow w-10 h-10  absolute right-[-5%] bg-white rounded-full ] top-1/2 -translate-y-1/2 z-10 cursor-pointer"
    />
);

const PrevArrow = ({ onClick }: any) => (
    <img
        src={LEFTARROW}
        alt="Previous"
        onClick={onClick}
        className="custom-slick-arrow left-arrow w-10 h-10  absolute left-[-5%] bg-white rounded-full top-1/2 -translate-y-1/2 z-10 cursor-pointer"
    />
);
const steps = [
    {
        step: "Step 1",
        title: "Apply",
        description: "No fancy cover letters or rap-CVs required. Just show us what you'd bring to the squad.",
        icon: CARD1,
    },
    {
        step: "Step 2",
        title: "Ask",
        description: "Got questions? Fire away. We love curiosity and clarity; it means you care.",
        icon: CARD2,
    },
    {
        step: "Step 3",
        title: "Interview",
        description: "Come ready to chat, ask your questions, and keep it real. It's all about finding a match for you and for us.",
        icon: CARD3,
    },
    {
        step: "Step 4",
        title: "Presentation",
        description: "A little spotlight moment, show us how you think, solve, and shine. No pressure. Just bring your best self.",
        icon: CARD4,
    },
    {
        step: "Step 5",
        title: "Decision",
        description: "If we both feel the vibes, we’ll send you the welcome kit, and your spot on the roster.",
        icon: CARD5,
    },
];



const ACCORDION = [
    {
        heading: 'What should I really expect in my first few weeks at Ileseum?',
        description: 'Think of it as your 45-day no-pressure honeymoon, with just the right amount of vibe checks. Your journey starts with a 6-day immersive induction, packed with club tours, team intros, core values, and real-life scenarios. No one’s measuring you on punch-ins or stiff formality. You’ll be signed on like a star, get your jersey moment, and be set up with everything you need to thrive. The goal? Feel settled, supported, and ready to shine, not just perform.'
    },
    {
        heading: 'What kind of people work at Ileseum?',
        description: 'We’re a mix of high-performers and high-fivers. You’ll find ex-athletes, wellness nerds, creative thinkers, and hospitality pros, all brought together by a common vibe: we’re kind, driven, and wildly committed to what we do. We care deeply about impact, not just hierarchy. If you bring heart, hustle, and humility, you’ll fit right in.'
    },
    {
        heading: 'What is the culture like at Ileseum Clubs?',
        description: 'Because we make space for you, not a version of you. Our culture isn’t just ping-pong tables and Spotify playlists (though we have those too). It’s built on trust, ownership, team wins, and real talk. From your first day, you’ll get to meet the folks who make this place what it is, no gatekeeping. We believe the best workplaces are built on good humans, not just good hires.'
    }
]



export default function HowWeHire() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };


    if (!isMounted) return null;

    return (



        <div className="container mx-auto px-4 bg-white pt-28 pb-10 md:py-40 text-black">
            <div className="text-center flex flex-col gap-8">
                <h1 className="text-2xl md:text-5xl font-semibold">Making it official</h1>
                <p className="text-base md:text-xl">
                    We hire people who are stellar at what they do-but <span className="md:block">even more, who bring the right energy to our club.</span>
                </p>
            </div>

            {/* // cards */}
            {/* // cards with slick carousel */}
            <div className="pt-20">
                <Slider {...settings}>
                    {steps.map(({ step, icon, title, description }, index) => (
                        <div key={index} className="px-4"> {/* spacing between slides */}
                            <div className="bg-[#7EDFA0] rounded-3xl p-6 text-left flex flex-col min-w-[160px] max-w-sm h-full mx-auto">
                                {/* Step and Icon */}
                                <div className="flex justify-between items-start mb-8">
                                    <span className="text-sm font-medium bg-white px-4 py-2 rounded-full">
                                        {step}
                                    </span>
                                    {icon ? (
                                        <img src={icon} alt={`${title} icon`} className="w-12 h-12 object-contain" />
                                    ) : (
                                        <div className="w-12 h-12" aria-hidden />
                                    )}
                                </div>

                                {/* Title and Description */}
                                <div className="mb-16">
                                    <h3 className="text-xl font-semibold mb-3">{title}</h3>
                                    <p className="text-sm text-gray-800 leading-relaxed min-h-16">{description}</p>
                                </div>

                                {/* Learn More Button */}
                                <button
                                    className="text-base font-medium flex items-center gap-2 text-black hover:underline"
                                    aria-label={`Learn more about ${title}`}
                                >
                                    Learn more
                                    <img className="w-5 h-5" src={RIGHTARROW} alt="arrow icon" />
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>









            <div className="mt-24">
                <h3 className="text-2xl lg:text-4xl font-semibold mb-3 md:mb-14 leading-snug text-center">Still Curious?</h3>
                <div className="flex flex-col gap-6">
                    {ACCORDION.map((item, index) => <Accordion key={index} item={item} />)}
                </div>
            </div>
        </div>
    )
}