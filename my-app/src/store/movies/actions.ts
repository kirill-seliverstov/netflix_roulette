import { FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR, DELETE_MOVIE, MOVIE_DESCRIPTION } from './actionTypes';
import { FetchMovies, FetchMoviesSuccess, FetchMoviesError, FetchMoviesSuccessPayload, FetchMoviesErrorPayload, DeleteMovie, DeleteMoviePayload, MovieDescriptionPayload, MovieDescription } from './types';

export const fetchMovies = (): FetchMovies => ({
    type: FETCH_MOVIES
})

export const fetchMoviesSuccess = (payload: FetchMoviesSuccessPayload): FetchMoviesSuccess => ({
    type: FETCH_MOVIES_SUCCESS,
    payload
})

export const fetchMoviesError = (payload: FetchMoviesErrorPayload): FetchMoviesError => ({
    type: FETCH_MOVIES_ERROR,
    payload
})

export const deleteMovieAction = (payload: DeleteMoviePayload): DeleteMovie => ({
    type: DELETE_MOVIE,
    payload
})

export const movieDescrition = (payload: MovieDescriptionPayload): MovieDescription => ({
    type: MOVIE_DESCRIPTION,
    payload
})