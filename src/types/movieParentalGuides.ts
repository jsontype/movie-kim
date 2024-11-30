import { Meta, STATUS_TYPE } from './common'

export type MovieParentalGuides = {
  status: STATUS_TYPE
  status_message: string
  data: {
    parental_guide_count: number
    parental_guides: [
      {
        type: string
        parental_guide_text: string
      },
    ]
  }
  '@meta': Meta
}
