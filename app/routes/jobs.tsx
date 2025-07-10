import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Jobs | Ilesuem Club" },
        { name: "description", content: "Jobs | Welcome to Ilesuem Club!" },
    ];
};

function Jobs() {
    return (
        <p>Jobs</p>
    )
}

export default Jobs;