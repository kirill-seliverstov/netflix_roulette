import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

const getMovies = (state: RootState) => state.movies.movies;

const getLoading = (state: RootState) => state.movies.loading;

const getError = (state: RootState) => state.movies.error;

export const getMoviesSelector = createSelector(getMovies, (movies) => movies)

export const getMoviesLoadingSelector = createSelector(getLoading, (loading) => loading)

export const getMoviesErrorSelector = createSelector(getError, (error) => error)