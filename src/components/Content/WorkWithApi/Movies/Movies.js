import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../../UI/Spinner/Spinner';
import Movie from './Movie/Movie';
import './Movies.scss';

class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { moviesList, isFetching } = this.props;

        if (moviesList && moviesList.length) {
            const movies = moviesList.map(movie => (
                <Movie
                    key={movie.id}
                    movieData={movie}
                />
            ));
    
            return (
                <div className="Movies">
                    { isFetching && <Spinner /> }
                    {movies}
                </div>
            );
        }

        return null; 
    }
}

Movies.propTypes = {
    moviesList: PropTypes.array,
    isFetching: PropTypes.bool.isRequired
};

export default Movies;