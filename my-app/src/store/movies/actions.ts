import { FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from './actionTypes';
import { FetchMovies, FetchMoviesSuccess, FetchMoviesError, FetchMoviesSuccessPayload, FetchMoviesErrorPayload } from './types';

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