import { Meta, Movie, STATUS_TYPE } from "./common";

export interface MovieDetail extends Partial<WithImages> {
  status: STATUS_TYPE;
  status_message: string;
  data: {
    movie: Movie;
  };
  cast?: Cast[];
  "@meta": Meta;
}

export interface WithImages {
  medium_screenshot_image1: string;
  medium_screenshot_image2: string;
  medium_screenshot_image3: string;
  large_screenshot_image1: string;
  large_screenshot_image2: string;
  large_screenshot_image3: string;
}

export type Cast = {
  name: string;
  character_name: string;
  url_small_image: string;
  imdb_code: string;
};
