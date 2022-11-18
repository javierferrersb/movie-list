type GetBySearchResponse = {
    Search: Movie[];
    totalResults: string;
    Response: string;
    Error?: string;
};

type Movie = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
};

type MovieDetails = {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: {
        Source: string;
        Value: string;
    }[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
};

type GetByImdbIDResponse = MovieDetails & {
    Response: string;
    Error?: string;
};

type GetByTitleResponse = MovieDetails & {
    Response: string;
    Error?: string;
};

export type {
    GetBySearchResponse,
    GetByImdbIDResponse,
    GetByTitleResponse,
    Movie,
    MovieDetails,
};
