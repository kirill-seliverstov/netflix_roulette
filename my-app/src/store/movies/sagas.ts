import { FETCH_MOVIES } from './actionTypes';
import { fetchMoviesError, fetchMoviesSuccess } from './actions';
import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { Movies } from "./types";

const getMovies = () => axios.get("http://localhost:4000/movies?limit=20");

function* fetchMoviesSaga() {
    try {
        const { data }: AxiosResponse = yield call(getMovies);
        
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