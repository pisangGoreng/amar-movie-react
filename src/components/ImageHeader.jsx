import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

export default function ImageHeader({ source, text }) {
	return (
		<div className="relative w-[100%] h-[100%]">
			<Image
				src={source.webp.image_url}
				fallback={source.jpg.image_url}
				alt={text}
				className="w-[100%] h-[350px] blur-sm absolute"
			/>

			<Image
				src={source.webp.image_url}
				fallback={source.jpg.image_url}
				alt={text}
				className="w-[20%] h-[350px] left-[40%] absolute "
			/>
		</div>
	);
}

ImageHeader.propTypes = {
	source: PropTypes.object,
	text: PropTypes.string,
};

ImageHeader.defaultProps = {
	text: '',
};
