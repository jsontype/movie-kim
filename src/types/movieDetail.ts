import { meta, movie, status } from './common';

export type movieDetail = {
  status: status;
  status_message: string;
  data: {
    movie: movie;
  };
  cast?: cast[];
  '@meta': meta;
} & Partial<withImages>;

export type withImages = {
  medium_screenshot_image1: string;
  medium_screenshot_image2: string;
  medium_screenshot_image3: string;
  large_screenshot_image1: string;
  large_screenshot_image2: string;
  large_screenshot_image3: string;
};

export type cast = {
  name: string;
  character_name: string;
  url_small_image: string;
  imdb_code: string;
};
