import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "How We Hire | Ilesuem Club" },
        { name: "description", content: "How We Hire | Welcome to Ilesuem Club!" },
    ];
};

export default function HowWeHire() {
    return (
        <div className="container mx-auto px-4 bg-white pt-28 pb-10 md:py-40 text-black">
            <div className="text-center flex flex-col gap-8">
                <h1 className="text-2xl md:text-5xl font-semibold">Making it official</h1>
                <p className="text-base md:text-xl">
                    We hire people who are stellar at what they do-but <span className="md:block">even more, who bring the right energy to our club.</span>
                </p>
            </div>
        </div>
    )
}