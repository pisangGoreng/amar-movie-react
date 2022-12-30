/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import Image from './Image';

export default function MovieCard({ details }) {
	const { title, images, title_english: titleEnglish } = details;
	const movieTitle = titleEnglish === null ? title : titleEnglish;
	return (
		<Link to="/movies" state={{ payload: details }}>
			<button
				type="button"
				key={movieTitle}
				className="w-[250px] h-[250px] bg-red-300 m-2 mb-4  shrink-0"
			>
				<Image
					src={images.webp.image_url}
					fallback={images.jpg.image_url}
					alt={movieTitle}
					className="w-[100%] h-[90%]"
				/>
				<h3 className="text-md">{movieTitle}</h3>
			</button>
		</Link>
	);
}
