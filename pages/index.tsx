import Head from "next/head";
import MovieCard from "../components/MovieCard";
import MovieCardList from "../components/MovieCardList";
import SearchArea from "../components/SearchArea";

export default function Home() {
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
        <SearchArea />
        <MovieCardList />
      </main>
    </div>
  );
}
