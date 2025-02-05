"use client";

import { useEffect, useState } from "react";

const TOKEN =
  " eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2UzYTk2YTBkZDliYzRkZWE0ZjU5M2EyZWQzOGU3ZSIsIm5iZiI6MTczODY2NzkyOC4wNDMsInN1YiI6IjY3YTFmNzk4MzVkMzA5NzViNjAzMDE2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H5TucEjq5eV1Cgd-jQXaSn58ETrslnVg0TDE5vemFCk";
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
};
export function useMovie(searchTerm: string, debouncedValue: string) {
  const [listMovie, setListMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const endpoint = searchTerm
    ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        debouncedValue
      )}`
    : "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(endpoint, API_OPTIONS);

        const data = await response.json();

        setListMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [debouncedValue]);

  return { listMovie, isLoading };
}
