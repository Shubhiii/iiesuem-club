
import { useState } from "react";
import CLUB_MANAGER from "~/img/club_manager.svg";
import { MetaFunction } from "@remix-run/node";
import LOCATION from "~/img/location.svg";
import JOB_BAG from "~/img/job_bag.png";
import { useParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        { title: "Jobs | Ilesuem Club" },
        { name: "description", content: "Jobs | Welcome to Ilesuem Club!" },
    ];
};

const jobDetails = {
    whoYouAre: `A seasoned leader who comes with strong ability to lead diverse teams (sales, customer
service, operations), possesses vision and strategic mindset to ensure profitability of
the club while driving culture of customer centricity and accountability in teams. A
disciplined professional who is persuasive, influential and carries commercial acumen.`,

    whatYouWillDo: [
        "Lead overall operations of the club, including staff management, member services, and facility maintenance.",
        "Develop and implement business strategies to drive membership growth, enhance customer satisfaction, and ensure financial performance.",
        "Manage, monitor, evaluate the performance of all department heads/vertical heads.",
        "Oversee special events and programs held at the club from time to time.",
        "Critically analyse club performance from revenue, service quality and compliance viewpoints.",
    ],

    whatIsExpected: [
        "Achieve and sustain revenue targets as per AOP.",
        "Membership renewals of 90% or more.",
        "Hosting club level events as per agreed plan.",
        "Annual sales Growth.",
        "Customer satisfaction ratings.",
    ],

    locations: "Pune, Chennai, Mumbai",
    jobType: "Permanent",
};

export default function JobDetail() {
    const { jobid } = useParams();
    const [showForm, setShowForm] = useState(false);
    return (
        <>
            <div className="container mx-auto px-4 bg-white py-24">
                <div className="rounded-xl flex flex-col md:flex-row justify-center overflow-hidden">
                    <div className="md:w-3/5 overflow-hidden">
                        <img
                            src={CLUB_MANAGER}
                            alt="Club Manager"
                            className="w-full h-auto object-cover rounded-t-xl md:rounded-none"
                        />
                    </div>
                    <div className="bg-black md:w-2/5 text-white flex flex-col items-start justify-center text-center px-6 py-8">
                        <h1 className="text-2xl md:text-5xl font-semibold mb-6">Club Manager</h1>
                        <button
                            onClick={() => setShowForm(true)}
                            className="bg-purple text-white text-sm md:text-lg px-8 py-2 md:px-10 md:py-3 rounded-full w-max hover:bg-white hover:text-purple transition-all"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mb-20 flex flex-col md:flex-row justify-between gap-12">
                <div className="w-full md:w-3/4 space-y-12">
                    <div>
                        <h2 className="text-2xl md:text-4xl font-semibold mb-4">Who You Are?</h2>
                        <p className="text-black text-base md:text-lg">{jobDetails.whoYouAre}</p>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-4xl font-semibold mb-4">What You Will Do?</h2>
                        <ul className="text-base md:text-lg space-y-2 text-black">
                            {jobDetails.whatYouWillDo.map((item, index) => (
                                <li
                                    key={index}
                                    className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-4xl font-semibold mb-4">What is Expected of You?</h2>
                        <ul className="text-base md:text-lg space-y-2 text-black">
                            {jobDetails.whatIsExpected.map((item, index) => (
                                <li
                                    key={index}
                                    className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:hidden space-y-6 pt-4">
                        <div className="flex items-start gap-2">
                            <img src={LOCATION} alt="location" />
                            <div>
                                <h3 className="font-semibold">Locations:</h3>
                                <p className="text-black">{jobDetails.locations}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <img src={JOB_BAG} alt="job icon" />
                            <div>
                                <h3 className="font-semibold">Job Type:</h3>
                                <p className="text-black">{jobDetails.jobType}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block w-full md:w-1/4 text-lg space-y-8">
                    <div className="flex items-start gap-2">
                        <img src={LOCATION} alt="location" />
                        <div>
                            <h3 className="font-semibold">Locations:</h3>
                            <p className="text-black">{jobDetails.locations}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <img src={JOB_BAG} alt="job icon" />
                        <div>
                            <h3 className="font-semibold">Job Type:</h3>
                            <p className="text-black">{jobDetails.jobType}</p>
                        </div>
                    </div>
                </div>
            </div>
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50">
                    <div className="bg-white rounded-2xl w-[95%] max-w-3xl px-14 py-10 relative">
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-4 right-4 text-black text-2xl font-bold"
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-6">Apply for This Position</h2>
                        <form className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full">
                                    <label className="block text-sm font-medium">Name*</label>
                                    <input type="text" className="w-full border-b border-gray-400 outline-none py-2" required />
                                </div>
                                <div className="w-full">
                                    <label className="block text-sm font-medium">Phone Number*</label>
                                    <input type="text" className="w-full border-b border-gray-400 outline-none py-2" required />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Email*</label>
                                <input type="email" className="w-full border-b border-gray-400 outline-none py-2" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Cover Letter*</label>
                                <textarea
                                    rows={4}
                                    className="w-full border border-gray-400 outline-none p-2 resize-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Upload CV/Resume *</label>
                                <input type="file" accept=".pdf,.doc,.docx" className="block" required />
                                <p className="text-xs text-gray-500 mt-1">
                                    Allowed Type(s): .pdf, .doc, .docx
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4" required />
                                <p className="text-sm">
                                    By using this form you agree with the storage and handling of your data by this website. *
                                </p>
                            </div>

                            <button type="submit" className="bg-purple border border-purple hover:bg-transparent text-white text-sm md:text-lg px-8 py-3 rounded-full hover:text-purple transition-all">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}