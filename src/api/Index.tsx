import { APIENDPOINT_TYPE } from '@/types/apiEndpoint'
import { ListMovies } from '@/types/listMovies'
import { MovieDetail } from '@/types/movieDetail'

const API_URL = 'https://yts.mx/api/v2/'

const fetchAPI = async (endPoint: APIENDPOINT_TYPE, params = {}) => {
  try {
    const query = new URLSearchParams(params).toString()
    const res = await fetch(`${API_URL}${endPoint}?${query}`)

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`)
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error('failed to fetch', error)
    throw error
  }
}

export const listMoviesApi = (params = {}): Promise<ListMovies> => {
  return fetchAPI('list_movies.json', params)
}
export const movieDetailsApi = (params = {}): Promise<MovieDetail> => {
  return fetchAPI('movie_details.json', params)
}
export const movieParentalGuidesApi = (params = {}): Promise<any> => {
  return fetchAPI('movie_parental_guides.json', params)
}
export const movieSuggestionsApi = (params = {}): Promise<any> => {
  return fetchAPI('movie_suggestions.json', params)
}
