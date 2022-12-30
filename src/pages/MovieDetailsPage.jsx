import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import ImageHeader from '../components/ImageHeader';
import YoutubePlayer from '../components/YoutubePlayer';

export default function MovieDetailsPage() {
	const detailsProps = useLocation();
	const [details] = useState(() => detailsProps.state.payload);
	console.log('🚀 ~ file: AuthPages.jsx:10 ~ AuthPages ~ location', details);

	const {
		title,
		images,
		title_english: titleEnglish,
		trailer,
		duration,
		rating,
		score,
		scored_by: scoredBy,
		rank,
		synopsis,
	} = details;
	const { embed_url: embedUrl } = trailer;
	const movieTitle = titleEnglish === null ? title : titleEnglish;

	return (
		<div className="flex-col bg=[#121212]">
			<div className="h-[350px]">
				<ImageHeader source={images} text={movieTitle} />
			</div>

			<div className="h-[1000px] w-[100%] bg-red-300 grid grid-cols-3 gap-2 mt-4 p-4">
				<div className="col-span-2 ">
					<p>{synopsis}</p>
				</div>

				<div>
					<div className="h-[300px] items-center justify-center flex text-xl border border-[#121212]">
						{embedUrl && (
							<YoutubePlayer sourceUrl={embedUrl} title={movieTitle} />
						)}

						{!embedUrl && <p>Sorry, No Trailer</p>}
					</div>

					<div className="text-xl mt-4">
						<p>Title: {movieTitle}</p>
						<p>Duration: {duration}</p>
						<p>Rating: {rating}</p>
						<p>Score: {score}</p>
						<p>Score By: {scoredBy}</p>
						<p>Rank: {rank}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
