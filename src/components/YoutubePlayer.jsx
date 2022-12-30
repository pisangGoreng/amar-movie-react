import React from 'react';
import PropTypes from 'prop-types';

export default function YoutubePlayer({ sourceUrl, title }) {
	console.log(sourceUrl);
	return (
		<iframe
			width="100%"
			height="100%"
			src={sourceUrl}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title={title}
		/>
	);
}

YoutubePlayer.propTypes = {
	sourceUrl: PropTypes.string,
	title: PropTypes.string,
};

YoutubePlayer.defaultProps = {
	sourceUrl: '',
	title: '',
};
