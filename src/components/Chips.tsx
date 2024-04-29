type Props = {
    title: string;
    state: Array<string>;
    setState: (val: Array<string>) => void;
};

function Chips({ title, state, setState }: Props) {
    const handleClick = () => {
        setState(state.filter(category => category !== title));
    };

    return (
        <div className="bg-[#148A08] w-fit px-4 pb-1.5 inline-block rounded-full">
            <span
                className="mr-2"
            >{title}</span>
            <span
                className="text-xl text-[#085C00] hover:cursor-pointer hover:text-red-500"
                onClick={handleClick}
            >x</span>
        </div>
    );
}

export default Chips;