import { meta, movies, status } from './common';

export type movieSuggestions = {
  status: status;
  status_message: string;
  data: {
    movie_count: number;
    movies: movies[];
  };
  '@meta': meta;
};
