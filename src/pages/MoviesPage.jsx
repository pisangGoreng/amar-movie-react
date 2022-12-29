/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import Image from '../components/Image';
import moviesActions from '../redux/actions/movies';

const items = [...Array(33).keys()];
// eslint-disable-next-line react/prop-types
function Items({ currentItems }) {
	return (
		<div className="min-w-screen min-h-[50%] bg-green-300 flex flex-wrap overflow-auto ">
			{currentItems &&
				// eslint-disable-next-line react/prop-types
				currentItems.map((item) => (
					<div
						key={item.title}
						className="w-[180px] h-[180px] bg-red-300 mx-2 my-2 flex-shrink-0"
					>
						<Image
							src={item.images.webp.image_url}
							fallback={item.images.jpg.image_url}
							alt={item.title}
						/>
						<h3>{item.title}</h3>
					</div>
				))}
		</div>
	);
}

// eslint-disable-next-line react/prop-types
export default function MoviesPage() {
	const dispatch = useDispatch();
	const moviesDetails = useSelector((state) => state.movies.details);
	const paginationDetails = useSelector((state) => state.movies.pagination);
	const loading = useSelector((state) => state.movies.loading);
	const error = useSelector((state) => state.movies.error);

	useEffect(() => {
		dispatch(moviesActions.getMovies());
	}, [dispatch]);

	// useEffect(() => {
	// 	dispatch(moviesActions.getMovies());
	// }, []);

	console.log(paginationDetails);

	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 25;

	// Simulate fetching items from another resources.
	// (This could be items from props; or items loaded in a local state
	// from an API endpoint with useEffect and useState)
	const endOffset = itemOffset + itemsPerPage;
	console.log(`Loading items from ${itemOffset} to ${endOffset}`);
	const currentItems = moviesDetails.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(
		paginationDetails?.items?.total || 0 / itemsPerPage
	);

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
				breakLabel=""
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageCount={pageCount}
				previousLabel="< previous"
				renderOnZeroPageCount={null}
				pageClassName="hidden"
				onClick={(isNext) => {
					console.log(isNext);
				}}
			/>
		</div>
	);
}
