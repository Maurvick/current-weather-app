import {
  TiWeatherDownpour,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherStormy,
  TiWeatherSunny,
} from "react-icons/ti";
import { BsWind, BsWater } from "react-icons/bs";
import { IWeather } from "../@types/weather";

type WeatherItemPropsType = {
  forecast: IWeather;
};

export default function WeatherItem({ forecast }: WeatherItemPropsType) {
  const weatherStatus = forecast.weather[0].main;
  const weatherDetail = forecast.weather[0].description;

  return (
    <>
      {weatherStatus == "Clear" ? (
        <TiWeatherSunny size={50} />
      ) : weatherStatus == "Clouds" ? (
        <TiWeatherPartlySunny size={50} />
      ) : weatherStatus == "Thunderstorm" ? (
        <TiWeatherStormy size={50} />
      ) : weatherStatus == "Drizzle" ? (
        <TiWeatherShower size={50} />
      ) : weatherStatus == "Rain" ? (
        <TiWeatherDownpour size={50} />
      ) : (
        <img
          src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
          width={50}
          height={50}
          alt={forecast.weather[0].icon}
        />
      )}

      {Math.round(forecast.main.temp) + "°C"}

      <h1>{forecast.name}</h1>

      <h1>{weatherDetail.charAt(0).toUpperCase() + weatherDetail.slice(1)}</h1>

      <div className="weather__description">
        <div className="weather__column">
          <div>
            <BsWind size={40} />
          </div>

          <h2 className="weather__wind">{forecast.wind.speed} </h2>

          <div>
            <BsWater size={40} />
          </div>

          <h2 className="weather__humidity">
            {/* <BsWater size={40} /> */}
            {forecast.main.humidity}
          </h2>
        </div>
      </div>
    </>
  );
}
