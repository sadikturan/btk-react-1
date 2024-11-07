import { useCallback, useEffect, useState } from "react";

export default function useFetch(url, config) {
  const [data, setData] = useState([]);
  const [error, SetError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const SendRequest = useCallback(
    async function SendRequest(data) {
      setIsLoading(true);

      try {
        const response = await fetch(url, { ...config, body: data });
        const resData = await response.json();

        if (!response.ok) {
          throw new Error(resData.message || "hata oluştu");
        }

        setData(resData);
      } catch (error) {
        SetError(error.message);
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if (config && config.method === "GET") {
      SendRequest();
    }
  }, [SendRequest, config]);

  return {
    data,
    isLoading,
    error,
    SendRequest,
  };
}
