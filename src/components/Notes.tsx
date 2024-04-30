import { ChangeEvent, useState } from "react";

function Notes() {
    const [note, setNote] = useState(localStorage.getItem("note") as string);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNote(e.target.value);
        localStorage.setItem("note", note);
    };

    return (
        <div className="bg-[#F1C75B] w-full h-fit text-black rounded-2xl pt-4 pb-2 pl-8 pr-2">
            <p className="text-2xl font-bold">All notes</p>
            <textarea
                name="Notes"
                cols={50}
                rows={16}
                className="bg-[#F1C75B] outline-none resize-none mt-4 scrollbar scrollbar-thumb-[#FFE6A6] scrollbar-thumb-rounded-full scrollbar-w-2"
                value={note}
                onChange={handleChange}
            ></textarea>
        </div>
    );
}

export default Notes;