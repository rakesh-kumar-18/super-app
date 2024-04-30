import { NewsData } from "../pages/Dashboard";

function News({ articles }: NewsData) {
    const random = Math.floor(Math.random() * 100);

    return (
        <div>
            <div className="h-full bg-contain bg-no-repeat relative rounded-t-2xl" style={{ backgroundImage: `url(${articles[random].urlToImage})` }}>
                <p className="bg-[#000000BD] absolute bottom-0 w-full px-6 py-8 text-2xl font-semibold">{articles[random].title}</p>
            </div>
            <div className="bg-white text-black py-4 px-8 rounded-b-2xl">{articles[random].description}</div>
        </div>
    );
}

export default News;