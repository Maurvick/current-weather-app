import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

/**
 *
 * @returns apiUrl, setCity, setLanguage, setMetrics
 */
export const useWeatherContext = () => {
  const weatherContext = useContext(WeatherContext);

  if (!weatherContext) {
    throw new Error(
      "useWeatherContext has to be used within <WeatherContext.Provider>"
    );
  }

  return weatherContext;
};
