import { useWeatherContext } from "../hooks/useWeatherContext";
import { HiLanguage } from "react-icons/hi2";

export default function WeatherSearch() {
  const { setCity, setLanguage } = useWeatherContext();

  return (
    <>
      <input
        onChange={(e) => setCity(e.target.value)}
        type="search"
        placeholder="Find city..."
      />

      <div className="dropdown">
        <button className="drop-button">
          <HiLanguage size={20} />
        </button>

        <div className="dropdown-content">
          <a onClick={() => setLanguage("en")}>English</a>
          <a onClick={() => setLanguage("ua")}>Ukrainian</a>
          <a onClick={() => setLanguage("cz")}>Czech</a>
          <a onClick={() => setLanguage("it")}>Italian</a>
          <a onClick={() => setLanguage("pl")}>Polish</a>
          <a onClick={() => setLanguage("la")}>Latvian</a>
          <a onClick={() => setLanguage("lt")}>Lithuanian</a>
        </div>
      </div>
    </>
  );
}
