import { createStore, compose, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import rootReducer from "./reducers"
import rootSaga from "./sagas/index"

const store = (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */
  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware))

  const persistedReducer = persistReducer(
    {
      key: "root",
      storage,
    },
    rootReducer
  )
  const store = createStore(
    persistedReducer,
    compose(
      ...enhancers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

  const persistor = persistStore(store)

  // kick off root saga
  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}

export default store(rootReducer, rootSaga)
