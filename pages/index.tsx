import Head from "next/head";
import { useState } from "react";
import ErrorDisplay from "../components/ErrorDisplay";
import MovieCardList from "../components/MovieCardList";
import SearchArea from "../components/SearchArea";
import MovieCardListSkeleton from "../components/Skeletons/MovieCardListSkeleton";
import { Movie } from "../global/types";
import SearchMovies from "../libs/SearchMovies";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const searchMovies = (searchQuery: string) => {
    setMovies([]);
    setLoading(true);
    setError(false);
    SearchMovies({
      searchQuery,
    })
      .then((movies) => {
        setMovies(movies);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setErrorMessage(error.message);
        setLoading(false);
      });
  };
  return (
    <div>
      <Head>
        <title>Lista de Películas</title>
        <meta name="description" content="Lista de películas de una API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans">
        <h1 className="py-5 px-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          Movie List
        </h1>
        <SearchArea searchMovies={searchMovies} />
        {movies.length > 0 && !loading && <MovieCardList movies={movies} />}
        {loading && <MovieCardListSkeleton numberOfMovies={10} />}
        {error && <ErrorDisplay error={errorMessage} />}
      </main>
    </div>
  );
}
