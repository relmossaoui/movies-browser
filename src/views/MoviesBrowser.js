import React from 'react'

import SearchInput from '../components/SearchInput';
import MoviesList from '../components/MoviesList';
import '../assets/app.css'

import { getMoviesByKeyword } from '../data/api'

export default class MoviesBrowser extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            movies : [],
            keyword: ''
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this)
    }

    async onKeywordChangeHandler(e) {
        let keyword = e.target.value ;
        this.setState({ keyword })

        let movies = await getMoviesByKeyword(keyword)

        this.setState({ movies })
    }

    async componentDidMount() {
        let movies = await getMoviesByKeyword(this.state.keyword)

        this.setState({ movies })
    }



    render() {
        return (
            <main>
                <SearchInput keyword={this.state.keyword} onChange={this.onKeywordChangeHandler} />
                <MoviesList movies={this.state.movies} />
            </main>
        )
    }


}