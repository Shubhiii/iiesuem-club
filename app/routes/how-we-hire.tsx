import { MetaFunction } from "@remix-run/node";
import Accordion from "~/components/accordion";
import Icon1 from "~/img/card1.svg";
import Icon2 from "~/img/card2.svg";
import Icon3 from "~/img/card3.svg";
import Icon4 from "~/img/card4.svg";
import Icon5 from "~/img/card5.svg";

export const meta: MetaFunction = () => {
    return [
        { title: "How We Hire | Ilesuem Club" },
        { name: "description", content: "How We Hire | Welcome to Ilesuem Club!" },
    ];
};

const steps = [
    {
        step: "Step 1",
        title: "Apply",
        description: "No fancy cover letters or rap-CVs required. Just show us what you'd bring to the squad.",
        icon: null, // space reserved
    },
    {
        step: "Step 2",
        title: "Ask",
        description: "Got questions? Fire away. We love curiosity and clarity; it means you care.",
        icon: null,
    },
    {
        step: "Step 3",
        title: "Interview",
        description: "Come ready to chat, ask your questions, and keep it real. It's all about finding a match for you and for us.",
        icon: null,
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
    return (
        <div className="container mx-auto px-4 bg-white pt-28 pb-10 md:py-40 text-black">
            <div className="text-center flex flex-col gap-8">
                <h1 className="text-2xl md:text-5xl font-semibold">Making it official</h1>
                <p className="text-base md:text-xl">
                    We hire people who are stellar at what they do-but <span className="md:block">even more, who bring the right energy to our club.</span>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {steps.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#7EDFA0] rounded-xl p-6 text-left flex flex-col justify-between"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-sm font-medium bg-white px-2 py-1 rounded-full">
                                {item.step}
                            </span>
                            {/* Placeholder for future icon */}
                            <div className="w-6 h-6" />
                        </div>

                        <div className="mb-4">
                            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-800">{item.description}</p>
                        </div>

                        <button className="text-sm font-medium mt-auto flex items-center gap-1 hover:underline">
                            Learn more
                            <span>→</span>
                        </button>
                    </div>
                ))}
            </div>


            <div className="mt-48">
                <h3 className="text-2xl lg:text-4xl font-semibold mb-3 md:mb-10 leading-snug text-center">Still Curious?</h3>
                <div className="flex flex-col gap-6">
                    {ACCORDION.map((item, index) => <Accordion key={index} item={item} />)}
                </div>
            </div>
        </div>
    )
}