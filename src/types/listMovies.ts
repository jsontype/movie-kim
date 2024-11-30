import { Meta, Movies, STATUS_TYPE } from "./common";

export interface ListMovies {
  status: STATUS_TYPE;
  status_message: string;
  data: {
    movie_count: number;
    limit: number;
    page_number: number;
    movies: Movies[];
  };
  "@meta": Meta;
}
