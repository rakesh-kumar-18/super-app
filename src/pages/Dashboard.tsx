import { useLoaderData, useNavigate } from "react-router-dom";
import UserCard from "../components/UserCard";
import WeatherCard from "../components/WeatherCard";
import Notes from "../components/Notes";
import News from "../components/News";

export interface WeatherData {
    main: {
        temp: number;
        pressure: number;
        humidity: number;
    };
    weather: [
        {
            description: string;
            icon: string;
        }
    ];
    wind: {
        speed: number;
    };
}

export interface NewsData {
    articles: Array<{
        title: string;
        description: string;
        urlToImage: string;
    }>;
}

interface Loader {
    weatherData: WeatherData;
    newsData: NewsData;
}

function Home() {
    const navigate = useNavigate();
    const { weatherData, newsData } = useLoaderData() as Loader;

    return (
        <div className="grid grid-cols-3 gap-16 pt-8 px-16">
            <div className="grid gap-8">
                <UserCard />
                <WeatherCard {...weatherData} />
            </div>
            <Notes />
            <News {...newsData} />
            <button
                className="bg-[#148A08] px-10 py-2 rounded-full absolute bottom-4 right-16"
                onClick={() => navigate("/movies")}
            >Browse</button>
        </div>
    );
}

export default Home;