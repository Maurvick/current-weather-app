import { PropsWithChildren, createContext, useState } from "react";

type WeatherContextType = {
  apiUrl: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

export const WeatherContext = createContext<WeatherContextType | null>(null);

export function WeatherProvider({ children }: PropsWithChildren) {
  const [city, setCity] = useState("");
  const [language, setLanguage] = useState("en");

  const baseUrl = "https://api.openweathermap.org";
  const endpointPath = "data/2.5/weather";
  const apiKey = "8fd136d7db9cd419785952c1ade2a64f";
  const metrics = "metric";
  const apiUrl =
    `${baseUrl}` +
    `/${endpointPath}` +
    `?q=${city}` +
    `&appid=${apiKey}` +
    `&units=${metrics}` +
    `&lang=${language}`;

  return (
    <WeatherContext.Provider
      value={{
        apiUrl,
        setCity,
        setLanguage,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
