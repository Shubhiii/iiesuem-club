import { MetaFunction } from "@remix-run/node";
import { Link, useNavigate } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        { title: "Jobs | Ilesuem Club" },
        { name: "description", content: "Jobs | Welcome to Ilesuem Club!" },
    ];
};

const JOBS = [
    {
        id: 0,
        label: 'Club Manager',
        location: ['Pune', 'Chennai', 'Mumbai'],
        position: '04 Positions'
    },
    {
        id: 1,
        label: 'Corporate Sales',
        location: ['Pune'],
        position: '01 Position'
    },
    {
        id: 2,
        label: 'Sports Manager',
        location: ['Mumbai'],
        position: '04 Position'
    },
    {
        id: 3,
        label: 'Customer Support Executive',
        location: ['Chennai'],
        position: '01 Position'
    }
]

export default function Jobs() {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto px-4 bg-white pt-28 pb-10 md:py-40 text-black">
            <div className="text-center flex flex-col gap-8 md:gap-14">
                <h1 className="text-2xl md:text-5xl font-semibold">Hey, wanna join the tribe?</h1>
                <div className="flex gap-2 md:gap-14 justify-center">
                    <select className="custom-select border border-black bg-transparent font-semibold rounded-full px-4 py-2 text-xs md:text-base w-4/12 md:w-2/12 text-black">
                        <option>Location</option>
                    </select>
                    <select className="custom-select border border-black bg-transparent font-semibold rounded-full px-4 py-2 text-xs md:text-base w-4/12 md:w-2/12 text-black">
                        <option>Category</option>
                    </select>
                    <select className="custom-select border border-black bg-transparent font-semibold rounded-full px-4 py-2 text-xs md:text-base w-4/12 md:w-2/12 text-black">
                        <option>Experience</option>
                    </select>
                </div>

                <p className="text-base md:text-xl">44 <span className="text-lightgrey">jobs in</span> all locations <span className="text-lightgrey">in</span> all categories <span className="text-lightgrey">in</span> all job types</p>
            </div>

            <div className="flex flex-col gap-4 md:gap-6 mt-10 md:mt-20">
                {JOBS.map((job) => (
                    <div key={job.id} className="border border-green p-4 md:p-8 rounded-xl cursor-pointer" onClick={() => navigate(`/jobs/${job.id}`)}>
                        <div className="flex justify-between mb-2 md:mb-4 gap-1">
                            <h3 className="font-semibold text-lg md:text-3xl">{job.label}</h3>
                            <p className="text-xs whitespace-nowrap">{job.position}</p>
                        </div>
                        <p className="text-sm md:text-base">{job.location.join(', ')}</p>
                    </div>
                ))
                }
            </div >

            <div className="flex flex-col gap-6 mt-10 md:mt-20 items-center">
                <p className="ext-sm md:text-xl">Showing 4 of out 42 </p>
                <button className="bg-purple border border-purple hover:bg-transparent text-white text-sm md:text-lg px-8 py-3 rounded-full hover:text-purple transition-all">
                    Load more jobs
                </button>
            </div>
        </div >
    );
}
