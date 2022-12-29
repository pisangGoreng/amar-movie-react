import React from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/index';

import './App.css';

// import AuthPages from './pages/AuthPages';
import MoviesPage from './pages/MoviesPage';

function App() {
	const { store } = createStore;
	return (
		<Provider store={store}>
			{/* <AuthPages /> */}
			<MoviesPage />
		</Provider>
	);
}

export default App;
