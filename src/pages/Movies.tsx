import { useState } from "react";
import CategoryCard from "../components/CategoryCard";
import categories from "../utils/categories";
import Chips from "../components/Chips";
import { useNavigate } from "react-router-dom";

function Movies() {
    const [selectedMovies, setSelectedMovies] = useState<Array<string>>([]);
    const navigate = useNavigate();

    const handleClick = () => {
        if (selectedMovies.length < 3) {
            const warning = document.getElementById("warning") as HTMLElement;
            warning.classList.remove("hidden");
        } else {
            localStorage.setItem("categories", JSON.stringify(selectedMovies));
            navigate("/home");
        }
    };

    return (
        <div>
            <div className="flex justify-between mx-32 mt-10">
                <div>
                    <h1 className="font-single-day text-5xl text-[#72DB73] mt-10">Super app</h1>
                    <div className="text-6xl font-semibold mt-14">
                        <p className="leading-tight">Choose your</p>
                        <p className="leading-tight">entertainment</p>
                        <p className="leading-tight">category</p>
                    </div>
                    <div className="mt-10 grid grid-cols-3 gap-3">
                        {selectedMovies.map(title => <Chips
                            key={title}
                            title={title}
                            state={selectedMovies}
                            setState={setSelectedMovies}
                        />)}
                    </div>
                    {selectedMovies.length < 3 && <p className="text-[#FF0000] mt-6 hidden" id="warning">⚠️ Minimum 3 category required</p>}
                </div>
                <div className="grid grid-cols-3">
                    {categories.map(category =>
                        <CategoryCard
                            key={category.title}
                            category={category}
                            state={selectedMovies}
                            setState={setSelectedMovies}
                        />)}
                    <button
                        className="w-fit bg-[#148A08] px-6 py-2 mt-8 ml-16 rounded-full col-start-3"
                        onClick={handleClick}
                    >Next Page</button>
                </div>
            </div>
        </div>
    );
}

export default Movies;