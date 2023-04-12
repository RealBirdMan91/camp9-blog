import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

export function useQuery<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = (await axios.get(url)) as { data: T };
        setData(() => data);
      } catch (err) {
        const error = err as AxiosError;
        setIsError(error.message);
      }
      setIsLoading(false);
    })();
  }, []);

  return { data, isLoading, isError };
}
