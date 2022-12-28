import * as types from "../types"

const initialState = {
  movies: [],
  loading: false,
  error: null,
}

export default function movies(state = initialState, action) {
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      }

    case types.GET_MOVIES_REQUESTED:
      return {
        ...state,
        loading: true,
      }

    case types.GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.movies,
      }

    case types.GET_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }

    default:
      return state
  }
}
