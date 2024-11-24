import { meta, movies, status } from './common';

export type listMovies = {
  status: status;
  status_message: string;
  data: {
    movie_count: number;
    limit: number;
    page_number: number;
    movies: movies[];
  };
  '@meta': meta;
};
