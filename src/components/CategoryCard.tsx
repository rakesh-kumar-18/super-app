export interface Category {
    title: string;
    url: string;
    bgColor: string;
}

type Props = {
    category: Category,
    state: Array<string>;
    setState: (val: Array<string>) => void;
};

function CategoryCard({ category, state, setState }: Props) {
    const isCategoryPresent = state.includes(category.title);

    const handleClick = () => {
        if (isCategoryPresent) {
            setState(state.filter(title => title !== category.title));
        } else {
            setState([...state, category.title]);
        }
    };

    return (
        <div
            className={`w-fit rounded-2xl hover:cursor-pointer mx-3 my-2 hover:scale-105 ${isCategoryPresent && "border-4 border-[#11B800] mx-2 my-1"}`} style={{ backgroundColor: category.bgColor }}
            onClick={handleClick}
        >
            <h1 className={`text-2xl pt-2 pb-3 px-2 font-semibold ${isCategoryPresent && "pb-1"}`}>{category.title}</h1>
            <img className={`px-2 py-3 w-[180px] mx-auto ${isCategoryPresent && "w-[170px] pt-2"}`} src={category.url} alt="" />
        </div>
    );
}

export default CategoryCard;