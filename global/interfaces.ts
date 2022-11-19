interface GetBySearchParams {
  s: string;
  type?: "movie" | "series" | "episode";
  y?: number;
  r?: "json" | "xml";
  page?: number;
  callback?: string;
  v?: number;
}
interface SearchMoviesParams {
  searchQuery: string;
  searchType?: "movie";
  year?: number;
  page?: number;
}

interface GetMovieDetailsFromIDParams {
  imdbID: string;
  searchType?: "movie";
  year?: number;
  plot?: "short" | "full";
}

interface GetMovieDetailsFromTitleParams {
  title: string;
  searchType?: "movie";
  year?: number;
  plot?: "short" | "full";
}

interface GetByImdbIDParams {
  i: string;
  type?: "movie" | "series" | "episode";
  y?: number;
  plot?: "short" | "full";
  r?: "json" | "xml";
  callback?: string;
  v?: number;
}

interface GetByTitleParams {
  t: string;
  type?: "movie" | "series" | "episode";
  y?: number;
  plot?: "short" | "full";
  r?: "json" | "xml";
  callback?: string;
  v?: number;
}

export type {
  GetBySearchParams,
  GetByImdbIDParams,
  GetByTitleParams,
  SearchMoviesParams,
  GetMovieDetailsFromIDParams,
  GetMovieDetailsFromTitleParams,
};
