import React from 'react'

export default function MoviesItem(props) {
    return (
        <article>
            <h3>{props.title}</h3>
            <img src={props.imgUrl} />
            <h6>{props.releasesAt}</h6>
        </article>
    )
}