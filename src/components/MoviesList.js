import React from 'react'

import MoviesItem from './MoviesItem'

export default function MoviesList(props) {
    return (
        <section className="movies-list" >
            {
                props.movies.map((movie) => {
                    return (
                        <MoviesItem 
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