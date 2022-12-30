import * as types from '../types';

const moviesActions = {
	getMovies: (moviesData) => ({
		type: types.GET_MOVIES_REQUESTED,
		payload: moviesData,
	}),
	setActivePageNumber: (pageNumber) => ({
		type: types.SET_ACTIVE_PAGE_NUMBER,
		payload: { pageNumber },
	}),
};

export default moviesActions;
