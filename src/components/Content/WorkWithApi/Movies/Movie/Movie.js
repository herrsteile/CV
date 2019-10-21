import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Movie.scss';

const Movie = ({ movieData }) => {
    const { id, title, overview, poster_path } = movieData;
    const baseUrl = 'https://image.tmdb.org/t/p/w500';

    return (
        <div className="Movie">
            <h1>{title}</h1>

            <div className="MovieContent">
                <div className="ImageWrapper">
                    <img src={baseUrl + poster_path} alt={title} />
                </div>

                <p>{overview}</p>
            </div>

            <Link to={'/workwithapi/' + id}>Read More</Link>
        </div>
    );
};

Movie.propTypes = {
    movieData: PropTypes.object.isRequired
};

export default Movie;