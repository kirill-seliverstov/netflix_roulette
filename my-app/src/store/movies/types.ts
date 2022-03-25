import { DELETE_MOVIE, FETCH_MOVIES, FETCH_MOVIES_ERROR, FETCH_MOVIES_SUCCESS } from "./actionTypes";

export interface MoviesState {
    movies: Movies[];
    error: string | null;
    loading: boolean;
}

export interface Movies {
    title: string;
    tagline?: string;
    vote_average?: number;
    vote_count?: number;
    release_date?: string;
    poster_path: string;
    overview: string;
    budget?: number;
    revenue?: number;
    runtime: number;
    genres: Array<string>;
    id: number;
}

export interface FetchMoviesSuccessPayload {
    movies: Movies[];
}

export interface FetchMoviesErrorPayload {
    error: string;
}

export interface DeleteMoviePayload {
    id: string | number;
}

export type FetchMovies = {
    type: typeof FETCH_MOVIES
}

export type FetchMoviesSuccess = {
    type: typeof FETCH_MOVIES_SUCCESS,
    payload: FetchMoviesSuccessPayload
}

export type FetchMoviesError = {
    type: typeof FETCH_MOVIES_ERROR,
    payload: FetchMoviesErrorPayload
}

export type DeleteMovie = {
    type: typeof DELETE_MOVIE,
    payload: DeleteMoviePayload
}

export type MoviesAction = FetchMovies | FetchMoviesError | FetchMoviesSuccess | DeleteMovie;