import * as types from "../types"

const initialState = {
  movies: [],
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case types.GET_MOVIES:
      // console.log("masuk ke reducer bang ")
      // console.log(action)
      // console.log("")
      return {
        ...state,
        movies: action.payload,
      }
    default:
      return state
  }
}
