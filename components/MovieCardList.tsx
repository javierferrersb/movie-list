import { Movie } from "../global/types";
import MovieCard from "./MovieCard";
interface MovieCardListProps {
  movies: Movie[];
}
function MovieCardListSkeleon(props: MovieCardListProps) {
  const movieElements = props.movies.map((movie) => {
    return (
      <MovieCard
        id={movie.imdbID}
        key={movie.imdbID}
        title={movie.Title}
        year={movie.Year}
        poster_path={movie.Poster}
      />
    );
  });
  return (
    <div className="ml-3 mr-3 grid grid-cols-1 pb-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {movieElements}
    </div>
  );
}
export default MovieCardListSkeleon;
