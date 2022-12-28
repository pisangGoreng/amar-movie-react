import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moviesActions from '../redux/actions/movies';

export default function MovieList() {
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.movies.movies);
	const loading = useSelector((state) => state.movies.loading);
	const error = useSelector((state) => state.movies.error);

	useEffect(() => {
		dispatch(
			moviesActions.getMovies([
				{
					id: 1,
					name: 'Emmanuel',
					company: 'Dusk',
					catchPhrase: 'Made to fly',
				},
			])
		);
	}, [dispatch]);

	const people = [
		{
			name: 'Calvin Hawkins',
			email: 'calvin.hawkins@example.com',
			image:
				'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			name: 'Kristen Ramos',
			email: 'kristen.ramos@example.com',
			image:
				'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			name: 'Ted Fox',
			email: 'ted.fox@example.com',
			image:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	];

	console.log('movies', movies);
	return (
		<>
			{movies.length > 0 &&
				movies.map((movie) => <p key={movie.id}>{movie.name}</p>)}
			{movies.length === 0 ? <p>No movies</p> : null}
			{movies.length === 0 && loading === true ? <p>Loading...</p> : null}
			{error === 0 && !loading === true ? <p>{error.message}</p> : null}

			<ul className="divide-y divide-gray-200">
				{people.map((person) => (
					<li key={person.email} className="py-4 flex">
						<img className="h-10 w-10 rounded-full" src={person.image} alt="" />
						<div className="ml-3">
							<p className="text-sm font-medium text-gray-900">{person.name}</p>
							<p className="text-sm text-gray-500">{person.email}</p>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}
