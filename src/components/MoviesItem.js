import React from 'react'

export default function MoviesItem({ movie }) {
    return (
        <article className="movie-card">
            <h5>{movie.getTitle()}</h5>
            <img src={movie.getPosterUrl()} alt={movie.getTitle()} />
            <h6>({movie.getReleaseDate()})</h6>
        </article>
    )
}