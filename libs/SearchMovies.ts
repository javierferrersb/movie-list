import { SearchMoviesParams } from "../global/interfaces";
import { Movie } from "../global/types";
import { GetBySearch } from "./APIManager";

async function SearchMovies(parameters: SearchMoviesParams): Promise<Movie[]> {
  let { searchQuery, searchType, year, page } = parameters;
  searchType = "movie";
  const params = {
    s: searchQuery,
    type: searchType,
    y: year,
    page: page,
  };
  const response = await GetBySearch(params);
  if (response.Response === "True") {
    return response.Search;
  } else {
    throw new Error(response.Error);
  }
}

export default SearchMovies;
