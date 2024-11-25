import { meta, status } from './common';

export type movieParentalGuides = {
  status: status;
  status_message: string;
  data: {
    parental_guide_count: number;
    parental_guides: [
      {
        type: string;
        parental_guide_text: string;
      }
    ];
  };
  '@meta': meta;
};
