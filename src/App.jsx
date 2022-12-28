import React from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/index';

import './App.css';

import MovieList from './components/MovieList';

function App() {
	const { store } = createStore;
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<p>
						Edit <code>src/App.js</code> and save to reload. kucing
					</p>

					<h1 className="text-3xl font-bold underline text-green-400">
						Hello world!
					</h1>
					<MovieList />
				</header>
			</div>
		</Provider>
	);
}

export default App;
