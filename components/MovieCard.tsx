import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
  title: string;
  poster_path: string;
  id: string;
  year: string;
}
function MovieCard(props: MovieCardProps) {
  return (
    <Link href={`/details/${props.id}`}>
      <div className="group m-2 flex cursor-pointer flex-row items-center rounded-xl bg-white shadow-xl ring-1 ring-slate-900/5 hover:bg-blue-500 dark:bg-slate-800 dark:hover:bg-blue-700 md:max-w-md">
        <Image
          src={props.poster_path}
          alt={props.title}
          className="w-36 rounded-l-xl group-hover:brightness-110"
          width={200}
          height={300}
        />
        <div className="ml-1 flex-row p-2 md:ml-5">
          <div className="text-xl font-medium tracking-tight text-slate-900 group-hover:text-white dark:text-white">
            {props.title}
          </div>
          <p className="text-slate-500 group-hover:text-white dark:text-slate-400">
            {props.year}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
