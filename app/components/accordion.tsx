import { useState } from "react";
import ARROW_DOWN from "~/img/weui_arrow-outlined.svg"

const Accordion = ({ item }: any) => {
    const [open, setOpen] = useState(true);
    return (
        <div className="border p-4 border-black rounded-md flex gap-5 flex-col cursor-pointer" onClick={() => setOpen(!open)}>
            <div className="flex justify-between items-center">
                <p className="text-sm md:text-2xl">{item.heading}</p>
                <img className="w-6 md:w-auto" src={ARROW_DOWN} alt="" />
            </div>
            {open && <p className="text-xs md:text-lg">{item.description}</p>}
        </div>
    )
};

export default Accordion;