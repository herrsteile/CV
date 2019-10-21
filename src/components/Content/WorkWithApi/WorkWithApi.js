import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Movies from './Movies/Movies';
import InputWithButton from '../../UI/InputWithButton/InputWithButton';
import { fetchMovies } from '../../../store/movies/actions';
import './WorkWithApi.scss';

class WorkWithApi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchValue: ''
        }
    }

    onChangeHandlerForSearch = event => {
        this.setState({ searchValue: event.target.value })
    }

    componentDidMount() {
        this.props.fetchMovies('Avengers');
    }

    render() {
        const { isFetching, moviesList, fetchMovies } = this.props;
        const { searchValue } = this.state;

        return (
            <div className="WorkWithApi">
                <InputWithButton
                    type='text'
                    placeholder='Enter your movie'
                    inputValue={searchValue}
                    changed={this.onChangeHandlerForSearch}
                    onKeyDown={e => e.key === 'Enter' ? fetchMovies(searchValue) : null}
                    clicked={() => fetchMovies(searchValue)}
                    activeBtnText='Searching...'
                    btnText='Search'
                    isFetching={isFetching}
                />
                <Movies
                    moviesList={moviesList}
                    isFetching={isFetching}
                />
            </div>
        );
    }
};

WorkWithApi.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    moviesList: PropTypes.array,
    fetchMovies: PropTypes.func
};

const mapStateToProps = state => {
    return {
        moviesList: state.movies.moviesList,
        isFetching: state.movies.isFetching
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMovies: searchValue => dispatch(fetchMovies(searchValue))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkWithApi);