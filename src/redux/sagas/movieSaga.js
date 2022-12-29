/* eslint-disable no-unused-vars */
import { call, put, takeEvery, select } from 'redux-saga/effects';
import axios from 'axios';

import * as types from '../types';

function getApiData({ page, limit }) {
	const apiUrl = 'https://api.jikan.moe/v4/anime';
	return axios({
		url: `${apiUrl}?limit=${limit}&page=${page}`,
		method: 'get',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.data)
		.catch((error) => {
			console.log(error);
			return error;
		});
}

const getMoviesState = (state) => state.movies;

// eslint-disable-next-line no-unused-vars
function* fetchMovies(action) {
	try {
		const {
			meta: { page, total, limit },
			details,
		} = yield select(getMoviesState);

		const getMovieParams = {
			limit: 25,
			page: page + 1,
			total: total + limit,
		};

		const { data: newMoviesDetails, pagination } = yield call(
			getApiData,
			getMovieParams
		);

		yield put({
			type: types.GET_MOVIES_SUCCESS,
			meta: getMovieParams,
			details: [...details, ...newMoviesDetails],
			pagination,
		});
	} catch (error) {
		console.log('dalam catch ', error);
		yield put({ type: types.GET_MOVIES_FAILED, message: error.message });
	}
}

function* movieSaga() {
	yield takeEvery(types.GET_MOVIES_REQUESTED, fetchMovies);
}

export default movieSaga;
