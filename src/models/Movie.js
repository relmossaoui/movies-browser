import { POSTER_BASE_URL } from '../config'
import DEFAULT_POSTER from '../assets/images/default-movie.png'

export default class MovieModel {
    constructor(movie) {
        this.title      = movie.title
        this.posterUrl  = movie.poster_path ? `${POSTER_BASE_URL}${movie.poster_path}` : DEFAULT_POSTER
        this.releaseAt  = movie.release_date
        this.overview   = movie.overview
    }

    getTitle() { return this.title }
    getPosterUrl() { return this.posterUrl }
    getReleaseDate() { return this.releaseAt }
    getOverview() { return this.overview }
}