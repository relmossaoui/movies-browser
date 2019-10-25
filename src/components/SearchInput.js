import React from 'react'

export default function SearchInput(props) {

    return (
        <section>
            <input 
                placeholder="Enter keyword"
                type="text" 
                value={props.keyword} 
                onChange={props.onChange} 
            />
        </section>
    )
}