import { FETCH_MOVIES } from './actionTypes';
import { fetchMoviesError, fetchMoviesSuccess } from './actions';
import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { FetchMovies, Movies } from "./types";

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


export function* moviesSaga() {
    yield all([takeLatest(FETCH_MOVIES, fetchMoviesSaga)])
}