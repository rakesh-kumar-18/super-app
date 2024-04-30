import { useLoaderData } from "react-router-dom";
import UserCard from "../components/UserCard";
import WeatherCard from "../components/WeatherCard";
import Notes from "../components/Notes";

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

function Home() {
    const weatherData = useLoaderData() as WeatherData;

    return (
        <div className="grid grid-cols-3 p-12">
            <div>
                <UserCard />
                <WeatherCard {...weatherData} />
            </div>
            <Notes />
        </div>
    );
}

export default Home;