import { useEffect, useState } from "react";

const api_key = "<api_key>";

export default function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [total_results, setTotalResults] = useState(0);

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function PreviousPage() {
    setCurrentPage(currentPage - 1);
  }

  useEffect(
    function () {
      const controller = new AbortController();
      const signal = controller.signal;

      async function getMovies(page) {
        try {
          setLoading(true);
          setError("");
          const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=${page}`,
            { signal: signal }
          );

          if (!res.ok) {
            throw new Error("Bilinmeyen hata oluştu.");
          }

          const data = await res.json();
          if (data.total_results === 0) {
            throw new Error("Film bulunamadı.");
          }

          setMovies(data.results);
          setTotalPages(data.total_pages);
          setTotalResults(data.total_results);
        } catch (err) {
          if (err.name === "AbortError") {
            console.log("aborted...");
          } else {
            setError(err.message);
          }
        }
        setLoading(false);
      }

      if (query.length < 4) {
        setMovies([]);
        setError("");
        return;
      }

      getMovies(currentPage);

      return () => {
        controller.abort();
      };
    },
    [query, currentPage]
  );

  return {
    movies,
    loading,
    error,
    currentPage,
    totalPages,
    total_results,
    nextPage,
    PreviousPage,
  };
}
