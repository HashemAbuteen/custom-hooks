import { useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function fetchData() {
    setError(null);
    setData(null);
    setIsLoading(true);
    setData(
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((err) => setError(err))
    );
  }
  return [data, error, isLoading, fetchData];
}
