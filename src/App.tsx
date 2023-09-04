import { IWeather } from "./@types/weather";
import "./App.scss";
import WeatherItem from "./components/WeatherItem";
import WeatherSearch from "./components/WeatherSearch";
import { useFetch } from "./hooks/useFetch";
import { useWeatherContext } from "./hooks/useWeatherContext";

export default function App() {
  const { apiUrl } = useWeatherContext();
  const { isLoading, data } = useFetch<IWeather>(apiUrl);

  return (
    <main className="container">
      <div className="card">
        <div className="search">
          <WeatherSearch />
        </div>

        <div className="weather">
          {isLoading && "Loading..."}

          {data &&
            data.map((weather: IWeather) => (
              <WeatherItem key={weather.id} forecast={weather} />
            ))}
        </div>
      </div>
    </main>
  );
}
