import React from 'react'

export default function SearchInput(props) {

    return (
        <section className="search-container">
            <input 
                placeholder="Search a movie"
                type="text" 
                value={props.keyword} 
                onChange={props.onChange} 
            />
            <button><i className="fa fa-search"></i></button>
        </section>
    )
}