import MovieCardSkeleton from "./MovieCardSkeleton";
interface MovieCardSkeletonProps {
  numberOfMovies: number;
}
function MovieCardList(props: MovieCardSkeletonProps) {
  const movieElements = [];
  for (let i = 0; i < props.numberOfMovies; i++) {
    movieElements.push(<MovieCardSkeleton key={i} />);
  }
  return (
    <div className="ml-3 mr-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {movieElements}
    </div>
  );
}
export default MovieCardList;
