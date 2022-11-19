import { MovieDetails } from "../global/types";
import DetailsRow from "./DetailsRow";

interface MovieDetailsProps {
  movie: MovieDetails;
}
function DetailCard(props: MovieDetailsProps) {
  const hiddenDetails = [
    "Poster",
    "imdbID",
    "Response",
    "DVD",
    "Production",
    "Website",
    "Metascore",
    "imdbRating",
    "imdbVotes",
    "BoxOffice",
    "Ratings",
    "Type",
  ];
  const rows = Object.entries(props.movie).map(([key, value], i) => {
    if (hiddenDetails.includes(key)) {
      return;
    }

    return <DetailsRow key={i} title={key} value={value.toString()} />;
  });

  return (
    <div>
      <table className="ml-5 mr-5 mb-7 table-auto border-collapse rounded-xl bg-white shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800">
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default DetailCard;
