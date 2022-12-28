import logo from "./logo.svg"
import "./App.css"

import { Provider } from "react-redux"
import createStore from "./redux/index"

import MovieList from "./components/MovieList"

function App() {
  const { store } = createStore
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. kucing
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1 className="text-3xl font-bold underline text-green-400">
            Hello world!
          </h1>
          <MovieList />
        </header>
      </div>
    </Provider>
  )
}

export default App
