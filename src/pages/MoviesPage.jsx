/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import Image from '../components/Image';
import MovieCardContainer from '../elements/MovieCardContainer';
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
	const [searchKeyword, setSearchKeyword] = useState(() => '');
	const [filteredResults, setFilteredResults] = useState([]);

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

	const searchMovies = (searchValue) => {
		setSearchKeyword(searchValue);
		if (searchKeyword !== '') {
			const filteredMovie = moviesDetails.filter((movie) => {
				return Object.values(movie)
					.join('')
					.toLowerCase()
					.includes(searchKeyword.toLowerCase());
			});
			setFilteredResults(filteredMovie);
		} else {
			setFilteredResults(moviesDetails);
		}
	};

	return (
		<div>
			<form>
				<label
					htmlFor="default-search"
					className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
				>
					Search
				</label>
				<div className="relative">
					<input
						type="search"
						id="default-search"
						className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search movies..."
						onChange={(e) => searchMovies(e.target.value)}
						required
					/>
				</div>
			</form>

			{searchKeyword.length > 1 ? (
				<MovieCardContainer currentMovies={filteredResults} />
			) : (
				<>
					<MovieCardContainer currentMovies={currentMovies} />
					<ReactPaginate
						breakLabel=""
						nextLabel="next >>"
						onPageChange={handlePageClick}
						pageCount={pageCount}
						previousLabel="<< previous"
						renderOnZeroPageCount={null}
						pageClassName="hidden"
						previousClassName="text-3xl mr-4"
						nextClassName="text-3xl ml-4"
						containerClassName="flex justify-center items-center my-4 "
						onClick={(event) => {
							if (event.isNext) {
								dispatch(moviesActions.getMovies());
							}
						}}
					/>
				</>
			)}
		</div>
	);
}

// filteredResults.map((movie) => {
// 					const { title, images } = movie;
// 					return (
// 						<div
// 							key={title}
// 							className="w-[180px] h-[180px] bg-red-300 mx-2 my-2 flex-shrink-0"
// 						>
// 							<Image
// 								src={movie.images.webp.image_url}
// 								fallback={movie.images.jpg.image_url}
// 								alt={movie.title_english}
// 							/>
// 							<h3>{movie.title_english}</h3>
// 						</div>
// 					);
// 				})
