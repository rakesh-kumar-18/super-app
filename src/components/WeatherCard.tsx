import { WeatherData } from "../pages/Dashboard";

function WeatherCard({ main, weather, wind }: WeatherData) {
    const date = new Date();
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return (
        <div className="w-full">
            <div className="flex justify-evenly bg-[#FF4ADE] text-2xl py-1 font-semibold rounded-t-2xl">
                <p>{date.toLocaleDateString()}</p>
                <p>{date.toLocaleTimeString()}</p>
            </div>

            <div className="grid grid-cols-3 bg-[#101744] rounded-b-2xl py-2">
                <div className="border-r-[1px] border-white border- flex flex-col items-center">
                    <img className="w-16" src={icon} alt="weather icon" />
                    <p>{weather[0].description}</p>
                </div>

                <div className="border-r-[1px] border-white flex flex-col items-center">
                    <p className="text-4xl mb-2">{main.temp.toFixed()}°C</p>
                    <div className="flex items-center">
                        <p className="mr-1">🌡</p>
                        <div className="text-sm">
                            <p>{main.pressure} mbar</p>
                            <p>Pressure</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center px-7 text-sm">
                    <div className="flex items-center mb-2">
                        <p className="mr-1">💨</p>
                        <div>
                            <p>{(wind.speed * 3.6).toFixed(1)} km/h</p>
                            <p>Wind</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p className="mr-1">💧</p>
                        <div>
                            <p>{main.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default WeatherCard;