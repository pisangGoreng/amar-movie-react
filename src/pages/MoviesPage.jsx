/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import moviesActions from '../redux/actions/movies';

const items = [...Array(33).keys()];
// eslint-disable-next-line react/prop-types
function Items({ currentItems }) {
	return (
		<div className="items">
			{currentItems &&
				// eslint-disable-next-line react/prop-types
				currentItems.map((item) => (
					<div key={item}>
						<h3>Item #{item}</h3>
					</div>
				))}
		</div>
	);
}

// eslint-disable-next-line react/prop-types
export default function MoviesPage() {
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.movies.movies);
	const loading = useSelector((state) => state.movies.loading);
	const error = useSelector((state) => state.movies.error);

	// console.log({
	// 	movies,
	// 	loading,
	// 	error,
	// });

	useEffect(() => {
		dispatch(moviesActions.getMovies());
	}, [dispatch]);

	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 4;

	// Simulate fetching items from another resources.
	// (This could be items from props; or items loaded in a local state
	// from an API endpoint with useEffect and useState)
	const endOffset = itemOffset + itemsPerPage;
	console.log(`Loading items from ${itemOffset} to ${endOffset}`);
	const currentItems = items.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(items.length / itemsPerPage);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		);
		setItemOffset(newOffset);
	};

	return (
		<div>
			<Items currentItems={currentItems} />

			<ReactPaginate
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="< previous"
				renderOnZeroPageCount={null}
			/>
		</div>
	);
}
