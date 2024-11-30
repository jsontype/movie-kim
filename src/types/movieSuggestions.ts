import { Meta, Movies, STATUS_TYPE } from './common';

export type MovieSuggestions = {
  status: STATUS_TYPE;
  status_message: string;
  data: {
    movie_count: number;
    movies: Movies[];
  };
  '@meta': Meta;
};
