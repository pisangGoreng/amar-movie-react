import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../components/MovieCard';

export default function MovieCardContainer({ currentMovies }) {
	return (
		<div className="min-w-screen min-h-[50%] bg-green-300  flex flex-row flex-wrap ">
			{currentMovies.map((movie) => {
				return <MovieCard details={movie} />;
			})}
		</div>
	);
}

MovieCardContainer.propTypes = {
	currentMovies: PropTypes.array,
};

MovieCardContainer.defaultProps = {
	currentMovies: [],
};
