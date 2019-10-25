import { API_URL } from '../config'
import mock from './mock'

export function getMoviesByKeyword(keyword) {
    if (API_URL) {
        return fetch(`${API_URL}?q=${keyword}`)
    } else {
        return new Promise((resolve, reject) => {
            resolve(mock)
        })
    }
}