/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import createStore from './redux/index';
import reportWebVitals from './reportWebVitals';

import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import AuthPage from './pages/AuthPages';

const root = ReactDOM.createRoot(document.getElementById('root'));
const { store } = createStore;

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<MoviesPage />} />
					<Route path="/movies" element={<MovieDetailsPage />} />
					<Route path="/auth" element={<AuthPage />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
