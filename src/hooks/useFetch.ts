import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
  isLoading: boolean;
  data: T[];
  isError: boolean;
}

/**
 *
 * @param url
 * @returns isLoading, data, isError
 */
export function useFetch<T>(url: string): FetchResponse<T> {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get<T>(url)
      .then((response) => {
        setData([response.data]);
      })
      .catch((error: AxiosError) => {
        setIsError(true);
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { isLoading, data, isError };
}
