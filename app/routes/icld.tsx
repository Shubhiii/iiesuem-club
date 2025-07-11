import Icon1 from "~/img/icldIcon1.png";
import Icon2 from "~/img/icldIcon2.png";
import Icon3 from "~/img/icldIcon3.png";
import Icon4 from "~/img/icldIcon4.png";
import IcldMain from "~/img/icld1.png";
import VIDEO_IMG from "~/img/video_img.svg";
import PLAY_ICON from "~/img/play_icon.svg";

const ICLD = () => {
    return (
        <>

            <div className="bg-[#FFE0C0]">
                <div className="container mx-auto">
                    <section className="px-4 pt-28 pb-12 text-center">
                        <h1 className="text-3xl md:text-6xl font-bold">Built to Grow. Trained to Lead.</h1>
                        <p className="text-sm md:text-lg max-w-4xl mx-auto mt-4">
                            Inspired by the legacy of OCLD (Oberoi Centre for Learning and Development), we created ICLD – The Ileseum Centre for Learning & Development, a first-of-its-kind initiative in the fitness and wellness space. It's our in-house learning engine, designed to instill world-class service standards, cultural depth, and leadership mindset from day one.
                        </p>

                        <div className="mt-20 flex flex-col lg:flex-row gap-10  justify-center items-center">
                            <img
                                src={IcldMain}
                                alt="Hands united"
                                className="rounded-lg w-auto"
                            />
                            <div className="text-left max-w-lg">
                                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                                    ICLD: The Ileseum Centre for Learning & Development
                                </h2>
                                <p className="text-sm md:text-base max-w-4xl mx-auto mt-4">
                                    The Ileseum Centre for Learning & Development (ICLD) is the foundation of how we build the Ileseum experience from the inside out. Every team member, regardless of role, goes through immersive coaching designed to sharpen instinct, elevate communication, and create member moments that feel effortless, yet unforgettable. From decoding body language to handling high-pressure scenarios with grace, this is where professionalism meets personality, and every employee becomes a culture carrier. Because great spaces don’t happen by chance. They’re built by people who are trained to lead, ready to care, and aligned with one rhythm, the Ileseum way.
                                </p>
                                <p className="text-sm md:text-base max-w-4xl mx-auto mt-4 underline">See how you can grow your career →</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>



            <section className="bg-white pt-20 px-4 text-center container mx-auto">
                <h2 className="text-3xl md:text-6xl font-bold">What it Means to Us</h2>
                <p className="text-sm md:text-xl font-semibold max-w-4xl mx-auto mt-4">
                    Training here isn’t about checking boxes. It’s about shaping confident, empathetic professionals who embody our values, deliver standout service, and create safe, warm, and connected spaces for every member, every day.
                </p>
                <div className="mt-10 flex justify-center">
                    <div className="relative">
                        <img className="rounded-lg" src={VIDEO_IMG} alt="video" />
                        <img
                            src={PLAY_ICON}
                            alt="play icon"
                            className="absolute md:w-28 md:h-28 inset-0 m-auto w-16 h-16"
                        />
                    </div>
                </div>

            </section>

            <section className="bg-white container mx-auto py-28 text-center">
                <h2 className=" text-3xl md:text-6xl font-semibold">The 6-Day Foundation Program</h2>
                <div className="mt-11 grid grid-cols-1 md:grid-cols-3 gap-6 w-4xl mx-auto">
                    {[
                        {
                            title: "Culture & Member Experience",
                            points: [
                                "Understand the Ileseum story, values, and vibe",
                                "Build a member-first mindset - respectful, equal, and warm",
                                "Learn the art of “facilitating with,” not “instructing at”"
                            ],
                            image: Icon1
                        },
                        {
                            title: "Communication & Detail",
                            points: [
                                "Master tone, body language, and active listening",
                                "Use smart questions to understand real needs",
                                "Spot small moments that leave a big impression"
                            ],
                            image: Icon2
                        },
                        {
                            title: "Real-World Readiness",
                            points: [
                                "Get phone etiquette right - always leave a great first impression",
                                "Learn our 6-step model to handle complaints with care",
                                "Think fast, speak right, and always treat members how you’d want to be treated"
                            ],
                            image: Icon3
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-[#7EDFA0] container mx-auto md:rounded-lg  p-6 text-left">
                            <img src={item.image} alt={item.title} className="w-12 h-12 mb-4" />
                            <h3 className="font-semibold text-2xl mb-4">{item.title}</h3>
                            <ul className="list-disc list-outside pl-4 text-sm">
                                {item.points.map((point, j) => (
                                    <li key={j} className="mb-1">{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>


            <section className="bg-[#771651] text-white py-24 text-center">
                <img
                    src={Icon4}
                    alt="Growth Icon"
                    className="w-16 h-16 mx-auto mb-4"
                />
                <h2 className="text-3xl md:text-6xl font-bold">Growth in Every Moment</h2>
                <p className="text-sm md:text-xl px-4 max-w-4xl mx-auto mt-4">
                    From day one, every Ileseum team member steps onto a path of continual development,
                    immersive member engagement skills, dedicated mentorship, and the Ileseum style and
                    service best practices. Because we believe that investing in your expertise and character
                    creates a club where excellence is experienced. At Ileseum, we don’t just take what we create,
                    we elevate it, ensuring every team member delivers a flawlessly consistent experience.
                </p>
                <div className="mt-12">
                    <button
                        className=" border border-white text-white text-sm md:text-lg px-6 py-2 md:px-8 md:py-2 rounded-full w-max hover:bg-white hover:text-purple transition-all">
                        Enroll Now
                    </button>
                </div>
            </section>
        </>
    )
};

export default ICLD;
