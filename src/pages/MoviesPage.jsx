/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import Image from '../components/Image';
import MovieCardContainer from '../components/MovieCardContainer';
import MovieList from '../components/MovieList';
import moviesActions from '../redux/actions/movies';

const items = [...Array(33).keys()];

export default function MoviesPage() {
	const dispatch = useDispatch();
	const {
		details: moviesDetails,
		pagination: paginationDetails,
		loading,
		error,
	} = useSelector((state) => state.movies);
	const [itemOffset, setItemOffset] = useState(() => 0);
	const [itemsPerPage, setItemsPerPage] = useState(() => 25);
	const [endOffset, setEndOffset] = useState(() => itemOffset + itemsPerPage);

	useEffect(() => {
		dispatch(moviesActions.setActivePageNumber(1));
		if (moviesDetails.length === 0) {
			dispatch(moviesActions.getMovies());
		}
	}, []);

	let currentMovies = moviesDetails.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(
		paginationDetails?.items?.total || 0 / itemsPerPage
	);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		setItemOffset(newOffset);
		setEndOffset(newOffset + itemsPerPage);
		currentMovies = moviesDetails.slice(itemOffset, endOffset);
	};

	return (
		<div>
			<MovieCardContainer currentMovies={currentMovies} />
			<ReactPaginate
				breakLabel=""
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageCount={pageCount}
				previousLabel="< previous"
				renderOnZeroPageCount={null}
				pageClassName="hidden"
				onClick={(event) => {
					if (event.isNext) {
						dispatch(moviesActions.getMovies());
					}
				}}
			/>
		</div>
	);
}
