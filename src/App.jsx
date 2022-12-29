import React from 'react';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';

// import createStore from './redux/index';

import './App.css';

// import AuthPages from './pages/AuthPages';
import MoviesPage from './pages/MoviesPage';

function App() {
	// const { store } = createStore;
	return (
		<>
			<p>Welcome</p>
			<MoviesPage />
		</>
	);
}

export default App;
