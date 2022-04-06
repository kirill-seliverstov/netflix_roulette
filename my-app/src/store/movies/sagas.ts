import { DELETE_MOVIE, FETCH_MOVIES } from './actionTypes';
import { deleteMovieAction, fetchMoviesError, fetchMoviesSuccess } from './actions';
import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { DeleteMovie, FetchMovies, Movies } from "./types";

const getMovies = (limit: number) => axios.get(`http://localhost:4000/movies?limit=${20 + limit}`);

function* fetchMoviesSaga(limit: FetchMovies) {
    const {
        payload: { moviesLimit }
    } = limit
    try {
        const { data }: AxiosResponse = yield call(getMovies, moviesLimit);

        yield put(fetchMoviesSuccess({
            movies: data.data
        }))
    } catch (e) {
        yield put(fetchMoviesError({
            error: 'Error'
        }))
    }
}

const deleteMovie = (id: number | string) => axios.delete(`http://localhost:4000/movies/${id}`)

function* deleteMovieSaga(movieId: DeleteMovie) {
    const {
        payload: { id }
    } = movieId

    try {
        yield call(deleteMovie, id)
    } catch {
        yield put(fetchMoviesError({
            error: 'Error'
        }))
    }
}

export function* moviesSaga() {
    yield all([takeLatest(FETCH_MOVIES, fetchMoviesSaga), takeLatest(DELETE_MOVIE, deleteMovieSaga)])
}
