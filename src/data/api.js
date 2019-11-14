import { API_URL, API_KEY } from '../config'
import mock from './mock'
import Movie from '../models/Movie'
import AwesomeDebouncePromise from 'awesome-debounce-promise';

export async function getMoviesByKeyword(keyword) {
    try {
        if (API_URL) {
            const searchAPIDebounced = AwesomeDebouncePromise( _ => fetch(`${API_URL}search/movie?query=${keyword}&api_key=${API_KEY}`), 2000) 
            let response = await searchAPIDebounced()
            
            let data = await response.json()

            return data.results.map(movie => new Movie(movie));
        } else {
            return mock
        }
    } catch(e) {

    }
}