/* eslint-disable default-param-last */
import * as types from '../types';

const initialState = {
	details: [],
	activePageNumber: 1,
	meta: {
		page: 0,
		limit: 25,
		total: 0,
	},
	pagination: null,
	loading: false,
	error: null,
};

export default function movies(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case types.GET_MOVIES_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case types.GET_MOVIES_SUCCESS:
			return {
				...state,
				loading: false,
				details: payload.details,
				meta: payload.meta,
				pagination: payload.pagination,
			};
		case types.GET_MOVIES_FAILED:
			return {
				...state,
				loading: false,
				error: payload.message,
			};
		case types.SET_ACTIVE_PAGE_NUMBER:
			return {
				...state,
				activePageNumber: payload.pageNumber,
			};

		default:
			return state;
	}
}
