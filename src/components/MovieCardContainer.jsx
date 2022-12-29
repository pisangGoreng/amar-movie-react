import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

export default function MovieCardContainer({ currentMovies }) {
	return (
		<div className="min-w-screen min-h-[50%] bg-green-300 flex flex-wrap overflow-auto ">
			{currentMovies.map((item) => (
				<div
					key={item.title}
					className="w-[180px] h-[180px] bg-red-300 mx-2 my-2 flex-shrink-0"
				>
					<Image
						src={item.images.webp.image_url}
						fallback={item.images.jpg.image_url}
						alt={item.title_english}
					/>
					<h3>{item.title_english}</h3>
				</div>
			))}
		</div>
	);
}

MovieCardContainer.propTypes = {
	currentMovies: PropTypes.array,
};

MovieCardContainer.defaultProps = {
	currentMovies: [],
};
