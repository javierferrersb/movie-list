import {
  GetMovieDetailsFromIDParams,
  GetMovieDetailsFromTitleParams,
} from "../global/interfaces";
import { GetByImdbID, GetByTitle } from "./APIManager";

async function GetMovieDetailsFromID(parameters: GetMovieDetailsFromIDParams) {
  const { imdbID, searchType, year, plot } = parameters;
  const params = {
    i: imdbID,
    type: searchType,
    y: year,
    plot: plot,
  };
  const response = await GetByImdbID(params);
  if (response.Response === "True") {
    return response;
  } else {
    throw new Error(response.Error);
  }
}

async function GetMovieDetailsFromTitle(
  parameters: GetMovieDetailsFromTitleParams
) {
  const { title, searchType, year, plot } = parameters;
  const params = {
    t: title,
    type: searchType,
    y: year,
    plot: plot,
  };
  const response = await GetByTitle(params);
  if (response.Response === "True") {
    return response;
  } else {
    throw new Error(response.Error);
  }
}

export { GetMovieDetailsFromID, GetMovieDetailsFromTitle };
