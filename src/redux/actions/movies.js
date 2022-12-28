import * as types from '../types';

// export function getMovies(moviesData) {
// 	return {
// 		type: types.GET_MOVIES_REQUESTED,
// 		payload: moviesData,
// 	};
// }

const moviesActions = {
	getMovies: (moviesData) => ({
		type: types.GET_MOVIES_REQUESTED,
		payload: moviesData,
	}),
};

export default moviesActions;
