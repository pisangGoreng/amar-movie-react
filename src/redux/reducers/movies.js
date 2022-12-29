/* eslint-disable default-param-last */
import * as types from '../types';

const initialState = {
	details: [],
	meta: {
		page: 0,
		limit: 25,
		total: 0,
	},
	pagination: {},
	loading: false,
	error: null,
};

export default function movies(state = initialState, action) {
	switch (action.type) {
		case types.GET_MOVIES_REQUESTED:
			return {
				...state,
				loading: true,
			};

		case types.GET_MOVIES_SUCCESS:
			return {
				...state,
				loading: false,
				details: action.details,
				meta: action.meta,
			};

		case types.GET_MOVIES_FAILED:
			return {
				...state,
				loading: false,
				error: action.message,
			};

		default:
			return state;
	}
}
