
function Notes() {
    return (
        <div className="bg-[#F1C75B] w-fit h-fit text-black rounded-2xl pt-4 pb-2 pl-8 pr-2">
            <p className="text-2xl font-bold">All notes</p>
            <textarea
                name="Notes"
                id=""
                cols={40}
                rows={14}
                className="bg-[#F1C75B] outline-none resize-none mt-4 scrollbar scrollbar-thumb-[#FFE6A6] scrollbar-thumb-rounded-full"
            ></textarea>
        </div>
    );
}

export default Notes;