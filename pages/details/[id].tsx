import { useRouter } from "next/router";
import DetailCard from "../../components/DetailsCard";
import { MovieDetails } from "../../global/types";
import { GetMovieDetailsFromID } from "../../libs/GetMovieDetails";

interface MovieDetailsProps {
  movie: MovieDetails;
}
function DetailsPage(props: MovieDetailsProps) {
  return (
    <div className="font-sans">
      <h1 className="py-5 px-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
        Movie Details
      </h1>
      <DetailCard movie={props.movie} />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const movie = await GetMovieDetailsFromID({
    imdbID: id,
  });
  return {
    props: {
      movie,
    },
  };
}

export default DetailsPage;
