import React from 'react'

import MoviesItem from './MoviesItem'

export default function MoviesList(props) {
    return (
        <section>
            {
                props.movies.map((movie) => {
                    return (
                        <MoviesItem 
                            className="movies-list"
                            title={movie.title}
                            imgUrl={movie.imgUrl}
                            releasesAt={movie.releasesAt}
                            key={movie.title}
                        />
                    )
                })
            }
        </section>
    )
}