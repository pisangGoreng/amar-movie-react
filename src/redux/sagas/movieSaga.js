import { call, put, takeEvery } from "redux-saga/effects"

const apiUrl = "https://jsonplaceholder.typicode.com/users"
function getApiData() {
  return fetch(apiUrl).then((response) =>
    response.json().catch((error) => error)
  )
}

function* fetchMovies(action) {
  try {
    const movies = yield call(getApiData)
    yield put({ type: "GET_MOVIES_SUCCESS", movies })
  } catch (error) {
    yield put({ type: "GET_MOVIES_FAILED", message: error.message })
  }
}

function* movieSaga() {
  yield takeEvery("GET_MOVIES_REQUESTED", fetchMovies)
}

export default movieSaga
