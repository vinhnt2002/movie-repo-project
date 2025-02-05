"use client";

import LoadingSpinner from "@/components/loading-spinner";
import MovieCard from "@/components/movie-card";
import Search from "@/components/serch";
import { useDebounce } from "@/hooks/use-debounce";
import React, { useEffect, useState } from "react";

const TOKEN =
  " eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2UzYTk2YTBkZDliYzRkZWE0ZjU5M2EyZWQzOGU3ZSIsIm5iZiI6MTczODY2NzkyOC4wNDMsInN1YiI6IjY3YTFmNzk4MzVkMzA5NzViNjAzMDE2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H5TucEjq5eV1Cgd-jQXaSn58ETrslnVg0TDE5vemFCk";
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
};
const Home = () => {
  const [listMovies, setListMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedValue = useDebounce(searchTerm, 500);


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

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> Youll Enjoy
            Without the Hassle
          </h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className="all-movies">
          <h2>All Movies</h2>

          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <ul>
              {listMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default Home;
