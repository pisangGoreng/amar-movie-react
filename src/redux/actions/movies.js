import * as types from '../types';

const moviesActions = {
	getMovies: (moviesData) => ({
		type: types.GET_MOVIES_REQUESTED,
		payload: moviesData,
	}),
};

export default moviesActions;
