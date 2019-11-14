import React from 'react'

import MoviesItem from './MoviesItem'

export default function MoviesList(props) {
    return (
        <section className="movies-container" >
            {   
                props.movies.map((movie, index) => {
                    return (
                        <MoviesItem 
                            movie={movie}
                            key={index}
                        />
                    )
                })
            }
        </section>
    )
}