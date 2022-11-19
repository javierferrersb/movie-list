import Head from "next/head";
import MovieCard from "../components/MovieCard";
import MovieCardList from "../components/MovieCardList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lista de Películas</title>
        <meta name="description" content="Lista de películas de una API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans">
        <h1 className="mt-0 mb-6 py-5 px-5 text-4xl font-bold tracking-tight text-slate-900">
          Movie List
        </h1>
        <MovieCardList />
      </main>
    </div>
  );
}
