import { Reducer } from 'redux';
import { FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR, DELETE_MOVIE } from './actionTypes';
import { MoviesAction, MoviesState } from './types';

const initialState: MoviesState = {
    movies: [],
    error: null,
    loading: false,
}

export const moviesReducer: Reducer<MoviesState> = (state = initialState, action: MoviesAction) => {
    switch(action.type) {
        case FETCH_MOVIES:
            return {...state, loading: true}
        case FETCH_MOVIES_SUCCESS:
            return {...state, loading: false, movies: [...action.payload.movies]}
        case FETCH_MOVIES_ERROR:
            return {...state, loading: false, error: action.payload.error}
        case DELETE_MOVIE: 
            return {...state, movies: state.movies.filter(movie => movie.id !== action.payload.id)}
        default:
            return state
    }
}