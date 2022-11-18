import axios from "axios";
import {
  GetByImdbIDParams,
  GetBySearchParams,
  GetByTitleParams,
} from "../global/interfaces";
import { GetByImdbIDResponse, GetBySearchResponse } from "../global/types";

const OMD_WEBSITE = "https://www.omdbapi.com/";

async function GetBySearch(
  parameters: GetBySearchParams
): Promise<GetBySearchResponse> {
  const params = {
    apikey: process.env.NEXT_PUBLIC_OMDB_API_KEY,
    ...parameters,
  };
  const response = await axios.get(OMD_WEBSITE, {
    params: params,
  });
  return response.data;
}

async function GetByImdbID(
  parameters: GetByImdbIDParams
): Promise<GetByImdbIDResponse> {
  const params = {
    apikey: process.env.NEXT_PUBLIC_OMDB_API_KEY,
    ...parameters,
  };
  const response = await axios.get(OMD_WEBSITE, {
    params: params,
  });
  return response.data;
}

async function GetByTitle(
  parameters: GetByTitleParams
): Promise<GetByImdbIDResponse> {
  const params = {
    apikey: process.env.NEXT_PUBLIC_OMDB_API_KEY,
    ...parameters,
  };
  const response = await axios.get(OMD_WEBSITE, {
    params: params,
  });
  return response.data;
}

export { GetBySearch, GetByImdbID, GetByTitle };
