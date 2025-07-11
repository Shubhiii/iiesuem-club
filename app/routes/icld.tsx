
import Icon1 from "~/img/icldIcon1.png";
import Icon2 from "~/img/icldIcon2.png";
import Icon3 from "~/img/icldIcon3.png";
import Icon4 from "~/img/icldIcon4.png";
import IcldMain from "~/img/icld1.png";


const ICLD = () => {
    return (
        <div className="w-screen  font-sans">
            <section className="bg-[#FFE0C0]  px-4 py-12 text-center mb-4">
                <h1 className="text-2xl md:text-7xl font-bold lg:pt-[15dvh]">
                    Built to Grow. Trained to Lead.
                </h1>
                <p className=" font-semibold text-3xl max-w-2xl mx-auto mt-4">
                    At Ileseum, we believe that exceptional clubs are built by exceptional people. Our
                    commitment to growth, coaching, and continuous development helps every team member
                    thrive, and makes our members experience truly stand out.
                </p>

                {/* Image + Text Grid */}
                <div className="mt-10 flex flex-col lg:flex-row gap-10 justify-center items-center">
                    <img
                        src={IcldMain}
                        alt="Hands united"
                        className="rounded-lg max-w-[300px]"
                    />
                    <div className="text-left max-w-md">
                        <h2 className="text-xl font-semibold mb-2">
                            ICLD: The Ileseum Centre for Learning & Development
                        </h2>
                        <p className="font-medium text-sm">
                            ICLD is the heart of the employee journey at Ileseum Clubs. It&apos;s where every team member
                            is trained, shaped, and elevated to deliver the signature Ileseum experience consistently,
                            across every location.
                            <br />
                            <br />
                            From service to safety, communication to culture — this is where it all begins. Through immersive
                            programs and real-world simulations, ICLD prepares our people with poise and confidence,
                            to think on their feet, and create memorable moments.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 2: What it means to us */}
            <section className="bg-white px-4 py-12 text-center">
                <h2 className="text-3xl font-semibold">What it Means to Us</h2>
                <p className="max-w-2xl mx-auto mt-4 text-sm">
                    Training here isn’t about checking boxes. It’s about shaping confident, empathetic professionals
                    who embody our values, deliver standout service, and create safe, warm, and connected spaces
                    for every member, every day.
                </p>
                <div className="mt-8 flex justify-center">
                    <video>
                        <source
                            type="video/mp4"
                            src="/your-video.mp4"
                        />
                        <track default kind="captions" lang="en" src="SUBTITLE_PATH" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            {/* Section 3: 6-Day Foundation */}
            <section className="bg-white px-4 py-12 text-center">
                <h2 className="text-3xl font-semibold">The 6-Day Foundation Program</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {[
                        {
                            title: "Culture & Member Experience",
                            points: [
                                "Understand the Ileseum story, values, and vibe",
                                "Build a member- first mindset - respectful, equal, and warm",
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
                                "Learn our 6 - step model to handle complaints with care",
                                "Think fast, speak right, and always treat members how you’d want to be treated"
                            ],
                            image: Icon3
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-[#7EDFA0] rounded-lg p-6 text-left">
                            <img src={item.image} alt={item.title} className="w-12 h-12 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <ul className="list-disc list-inside text-sm">
                                {item.points.map((point, j) => (
                                    <li key={j}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 4: Growth */}
            <section className="bg-[#771651] text-white px-4 py-12 text-center">
                <img
                    src={Icon4}
                    alt="Growth Icon"
                    className="w-16 h-16 mx-auto mb-4"
                />
                <h2 className="text-3xl font-medium">Growth in Every Moment</h2>
                <p className="max-w-3xl mx-auto text-md mt-4">
                    From day one, every Ileseum team member steps onto a path of continual development,
                    immersive member engagement skills, dedicated mentorship, and the Ileseum style and
                    service best practices. Because we believe that investing in your expertise and character
                    creates a club where excellence is experienced. At Ileseum, we don’t just take what we create,
                    we elevate it, ensuring every team member delivers a flawlessly consistent experience.
                </p>
                <div className="mt-12">
                    <button className="px-6 py-2 text-white font-semibold rounded-full border border-2 border-white hover:border-green transition-colors">
                        Apply now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ICLD;
